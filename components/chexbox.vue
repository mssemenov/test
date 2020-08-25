<template>
  <div>
    <b-form-group>
      <template v-slot:label>
        <b-form-checkbox v-on:change="toggleAll"
          v-model="allSelected"
          :value="id"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
      
        >
          {{ name }}
        </b-form-checkbox>
      </template>

      <b-form-group class="ml-4"
        name="flavors"
        v-for="data in flavours"
        :key="data.id"
      >
        <b-form-checkbox  v-if="data.length === undefined"
                v-model="selected"
        :value="data">
          {{ data}}
        </b-form-checkbox>
        <VueChexbox name="Диски" id=592  :flavours="data" v-if="data.length != undefined"/>
      </b-form-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    name: "VueChexbox",
    props:["flavours", "name", "id"],
    data() {
      return {
        selected: [],
        allSelected: [],
        indeterminate: false,
        chexboxSelected: false,
      }
    },
    methods: {
      toggleAll(checked) {
        console.log(checked);
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
        console.log("Новое значение" + newVal);
          console.log("Старое значение" + oldVal);
        if (newVal.length === 0) { // Родитель пустой
          console.log("Родитель пуст");
          this.indeterminate = false
          this.allSelected = []
          //  ОПЕРАЦИИ С VUEX
          let flavours = this.flavours;
          this.DeleteAll();
          this.$store.commit("Chexbox/DeleteChexbox", this.id);
          //  ОПЕРАЦИИ С VUEX
          
        } else if (newVal.length === this.flavours.length) { // Родитель Полный
          this.indeterminate = false
          this.allSelected = this.id;
          //  ОПЕРАЦИИ С VUEX
          this.DeleteAll();
          this.$store.commit("Chexbox/SetChexbox", this.id);
          //  ОПЕРАЦИИ С VUEX
        } else { // Выбран потомок
          this.indeterminate = true
          this.allSelected = this.id;
        }
        //  ОПЕРАЦИИ С VUEX
        if(newVal.length > oldVal.length && !this.chexboxSelected){ // появился новый chexbox
          this.$store.commit("Chexbox/SetChexbox", newVal[newVal.length -1]);
        }
        if(newVal.length < oldVal.length && !this.chexboxSelected){// убрали  отмечанный  chexbox
          this.$store.commit("Chexbox/DeleteChexbox", oldVal[oldVal.length -1]);
        }
        this.chexboxSelected = false;
        // console.log( this.$store.getters["Chexbox/GetChexbox"]);
        //  ОПЕРАЦИИ С VUEX
      }
    },
  }
</script>