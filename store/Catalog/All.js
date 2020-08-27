
export const actions = { 
    _All({commit, dispatch}, data){
        data.forEach(element => {
            commit("Catalog/Chexbox/SetChecboxCheckedType", {data:element, value: false}, { root: true });
            commit("Catalog/Chexbox/SetChecboxIndeterminate", {data:element, value: false}, { root: true });
            if(element.children.length != 0){
                dispatch("_All", element.children);
            }
        });
    }
}