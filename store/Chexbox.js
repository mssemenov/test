
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
        delete state.chexbox.indexOf(data);
    }
 
}
// getters ------------------------
export const getters = {
    GetChexbox: s=> s.chexbox
}