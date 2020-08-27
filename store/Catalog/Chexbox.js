export const mutations  =  {
    SetChecboxCheckedType(state, data) {
        data.data.CheckedType = data.value;
    },
    SetChecboxIndeterminate(state, data) {
        data.data.Indeterminate = data.value;
    },
}


export const actions = { 
    ChexboxCheckAll({commit, dispatch, getters}, name){
        console.log(getters[name]);
    }
}