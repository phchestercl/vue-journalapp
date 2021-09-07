import journalApi from "../../../../api/journalApi"

/* export const myActions = async ({commit})=>{

} */
export const loadEntries = async ({ commit })=>{
    console.log('Entro a loadEntries')
    try {
        const {data} = await journalApi.get('/wrko')
        //const data = await journalApi.get('/entries.json')
        console.log(data.wrkors)
        commit('setEntries',data.wrkors)
        
    } catch (error) {
        console.log(error)
        
    }

}

export const upDateEntry = async (/* { commit } */)=>{
    

}
export const createEntry = async (/* { commit } */)=>{
    

}