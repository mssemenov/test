<template>
  <div>
    <b-form-group>
      <template v-slot:label>
        <b-form-checkbox
          v-model="allSelected"
          :value="id"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="toggleAll"
        >
          {{ name }}
        </b-form-checkbox>
      </template>

      <b-form-checkbox-group
        :id="id"
        v-model="selected"
        :options="flavours"
        name="flavors"
        class="ml-4"
        aria-label="Individual flavours"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    props:["flavours", "name", "id"],
    data() {
      return {
        selected: [],
        allSelected: false,
        indeterminate: false
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      }
    },
    watch: {
      selected(newVal, oldVal) {
        console.log( "Новое значение " + newVal);
        console.log( "Старое значение " + oldVal);
        console.log(newVal.length < oldVal.length);
        // Handle changes in individual flavour checkboxes
        if (newVal.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newVal.length === this.flavours.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
        if(newVal.length > oldVal.length){
          this.$store.commit("Chexbox/SetChexbox", newVal[newVal.length -1]);
        }
        if(newVal.length < oldVal.length){
          this.$store.commit("Chexbox/DeleteChexbox", oldVal[oldVal.length -1]);
        }
        console.log(this.$store.getters["Chexbox/GetChexbox"]);
      }
    },
    created () {
      // console.log(this.flavours);
    },
  }
</script>