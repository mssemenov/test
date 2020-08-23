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
        indeterminate: false,
        chexboxSelected: false,
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      },
      DeleteAll(){ // удалить с Vuex все значения
        let flavours = this.flavours;
        flavours.forEach(element => {
            this.$store.commit("Chexbox/DeleteChexbox", element);
          });
          this.chexboxSelected = true;
      }
    },
    watch: {
      selected(newVal, oldVal) {
        if (newVal.length === 0) { // Родитель пустой
          this.indeterminate = false
          this.allSelected = false
          //  ОПЕРАЦИИ С VUEX
          let flavours = this.flavours;
          this.DeleteAll();
          this.$store.commit("Chexbox/DeleteChexbox", this.id);
          
        } else if (newVal.length === this.flavours.length) { // Родитель Полный
          this.indeterminate = false
          this.allSelected = this.id;
          //  ОПЕРАЦИИ С VUEX
          this.DeleteAll();
          this.$store.commit("Chexbox/SetChexbox", this.id);
        } else { // Выбран потомок
          this.indeterminate = true
          this.allSelected = false
        }
        if(newVal.length > oldVal.length && !this.chexboxSelected){ // появился новый chexbox
          this.$store.commit("Chexbox/SetChexbox", newVal[newVal.length -1]);
        }
        if(newVal.length < oldVal.length && !this.chexboxSelected){// убрали  отмечанный  chexbox
          this.$store.commit("Chexbox/DeleteChexbox", oldVal[oldVal.length -1]);
        }
        this.chexboxSelected = false;
        console.log( this.$store.getters["Chexbox/GetChexbox"]);
      }
    },
    created () {
      // console.log(this.flavours);
    },
  }
</script>