
// data --------------
export const state = () =>({
     chexbox: [],
})
// mutations ---------------------
export const mutations  =  {
    SetChexbox(state, data){
        state.chexbox.push(data);
    },
    DeleteChexbox(state, data){
        let a = state.chexbox.indexOf(data);
        delete state.chexbox[a];
    }
 
}
// getters ------------------------
export const getters = {
    GetChexbox: s=> s.chexbox
}