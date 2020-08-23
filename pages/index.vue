<template>
    <b-form name="flavors">
        <vueChexbox name="Машина" :flavours="[4,5,6,7,15,11]" id="5"></vueChexbox>
        <vueChexbox name="Колеса" :flavours="[13,12,16,14,10,25]" id="7"></vueChexbox>
    </b-form>
</template>

<script>
import vueChexbox from "../components/chexbox"
  export default {
      components:{
          vueChexbox
      },
      computed:{
      }
  }
</script>