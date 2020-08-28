export const mutations  =  {
    SetChecboxCheckedType(state, data) {
        data.data.CheckedType = data.value;
    },
    SetChecboxIndeterminate(state, data) {
        data.data.Indeterminate = data.value;
    },
}


export const actions = { 
    ChexboxCheckAll({store, commit, dispatch, getters}, arr){
        arr.forEach(element => {
            commit("SetChecboxCheckedType", {data:element , value: true });
        });
        console.log(arr);
    }
}