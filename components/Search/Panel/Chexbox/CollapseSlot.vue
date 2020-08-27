<template>
    <div class="d-flex flex-column">  
        <div v-for="data in dataset" :key="data.id" >
            <b-form-group class="min-h-auto"  v-show="data.visible != false">
                <Collapse 
                    :dataset="data"
                    v-if="data.children.length != 0" />
                <VueChexbox :dataset="data" v-if="data.children.length === 0" />
            </b-form-group>
        </div>
    </div>
 
</template>

<script>
import Collapse from "./Collapse"
import VueChexbox from "./chexbox"
export default {
    name: "ChexboxCollapse",
    props:[   
        "dataset",
    ],
    components:{
        VueChexbox,
        Collapse
    },
}
</script>

<style>
    .min-h-auto{
        min-height: auto;
    }
</style>