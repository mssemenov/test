<template>
    <b-form > 
        <VueRange/> <!-- ЦЕНА-->
        <!-- Брэнд-->
        <PanelBrand 
            :data="brand" 
            id="brand" 
            SetName="formSearch/SetBrandChexbox"
            GetName="formSearch/GetBrandChexbox" />
        <!-- Категории -->  
        <Panel items="Категории">
            <template v-slot:input></template>
            <template v-slot:data>
                <b-form-group>  
                    <ChexboxCollapse
                        :dataset="categories.slice(0,5)"/>
                    <!--  ОСтальные   ЗАписей показывающиеся при клике -->
                    <b-collapse :id="'categories'">
                            <ChexboxCollapse
                                :dataset="categories.slice(5)" />
                    </b-collapse>
                </b-form-group>
            </template>
            <!-- ПЕРЕДЕЛАТЬ ЛОГИКУ -->
            <template v-slot:button>
                <b-button variant="white" class="link-danger" v-b-toggle="'categories'" >
                    <span class = "when-closed">Показать еще</span>
                    <span class = "when-open">Скрыть</span>
                </b-button>
            </template>
            <!-- ПЕРЕДЕЛАТЬ ЛОГИКУ -->
        </Panel>
        <!-- <Panel
            :data="applicabilities" 
            id="applicabilities" 
            item ="Применимость"
           GetName="formSearch/ApplicabilitiesChexbox"
           KolvoVisible="ApplicabilitiesKolvoVisible"
        /> -->
        <b-button-group>
            <Submit/>
            <Reset/>
        </b-button-group>
    </b-form>
</template> 

<script>
import VueRange  from "../Search/range";
import PanelBrand  from "../Search/Panel/Slot/SlotChexbox";
import ChexboxCollapse from "../Search/Panel/Chexbox/CollapseSlot"
import Panel  from "../Search/Panel/index";
import Reset from "../Search/buttons/buttonsReset"
import Submit from "../Search/buttons/buttonSubmit"
export default {
    methods:{
    },
    components:{
        VueRange,
        PanelBrand,
        Panel,
        Reset,
        Submit,
        ChexboxCollapse
    },
    computed:{
        categories(){
            return this.$store.getters["Categories/CategoriesAll/GetCategories"];
        },
        applicabilities(){
            return this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"];
        },
        brand(){
            return this.$store.getters["Brand/BrandAll/GetBrand"];
        },
    }

}
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>