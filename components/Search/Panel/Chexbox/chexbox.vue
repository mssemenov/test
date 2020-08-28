<template>
  <b-form-checkbox 
  @change="checxboxGo(dataset.id)" 
  v-model="dataset.CheckedType"  
  :indeterminate="dataset.Indeterminate"
   :id="dataset.id.toString()">
    {{ dataset.name }}
      <slot></slot>
  </b-form-checkbox>
</template>

<script>
export default {
    props:["dataset"],
    methods: {
        checxboxGo(id){
            this.$store.commit("Catalog/Chexbox/SetChecboxCheckedType", { data: this.dataset, value: !this.dataset.CheckedType });
            console.groupCollapsed("ДАнные при клике");
                console.warn("CheckedType " + this.dataset.CheckedType);
            console.groupEnd();
            this.$store.dispatch("Catalog/Chexbox/ChexboxCheckAll" , {arr:this.$store.getters["Categories/CategoriesAll/GetCategories"], value: this.dataset.CheckedType} );
            console.log();
        }
    },
}
</script>

<style>

</style>