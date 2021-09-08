import journalApi from "../../../../api/journalApi"

/* export const myActions = async ({commit})=>{

} */
export const loadEntries = async ({ commit })=>{
    console.log('Entro a loadEntries')

    try {
        const {data} = await journalApi.get('/wrko')
        if(!data){
            commit('setEntries',[])
            return
        }
        //const data = await journalApi.get('/entries.json')
        //console.log(data.wrkors)
        commit('setEntries',data.wrkors)
        
    } catch (error) {
        console.log(error)
        
    }

}

export const upDateEntry = async ({ commit },data)=>{
    
    const {id,text,idato}=data
    try {
        await journalApi.put(`/wrko/${id}`,{text,idato})
        //console.log(res)
        commit('upDateEntry',data)
        
    } catch (error) {
        console.log(error)       
    }

}
export const createEntry = async ({ commit },data)=>{
    //console.log('Entro a nueva WO')
    try {
        const nwo=await journalApi.post('wrko/nwo',data)
        
        commit('addEntry',nwo.data.nwo)
    } catch (error) {
        console.log(error)
    }
}
export const deleteEntry = async({commit},id)=>{
    
    try {
        await journalApi.delete(`/wrko/${id}`,{id})
        commit('delEntryByID',id)
    } catch (error) {
        console.error(error)
    }
}