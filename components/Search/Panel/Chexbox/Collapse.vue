<template>
    <b-form-group class="mb-2">
      <template v-slot:label>
            <chexbox :dataset="dataset">
              <b-button variant="white" class="link-danger p-0" v-b-toggle="dataset.id.toString()">
                <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
              </b-button>
            </chexbox>
        </template>
        <!--  ПОТОМКИ -->
         <b-collapse :id="dataset.id.toString()">
            <b-form-checkbox-group
                class="ml-4 mb-2"
                name="flavors"
                v-for="data in dataset.children"
                :key="data.id">
                <chexbox :dataset="data" v-if="data.children.length == 0" />
                  <VueChexbox
                    :dataset="data"
                    v-if="data.children.length != 0"/>
            </b-form-checkbox-group>
         </b-collapse>
       <!--  ПОТОМКИ -->
    </b-form-group>
</template>

<script>
import chexbox from "./chexbox"
  export default {
    name: "VueChexbox",
    // GetName - Узнать почему неопределенно
    props:["dataset"],
    data() {
      return {

      }
    },

  }
</script>