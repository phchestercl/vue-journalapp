/* export const myMutations =  (state)=>{
    

} */

export const setEntries =  (state, entries)=>{
    state.entries=[...state.entries, ...entries]
    state.isLoading=false

}
export const upDateEntry =  (state,data)=>{
    //console.log('al Mutatio upDateEntry')
    //const {id,text}=data
    const index = state.entries.findIndex(entries=>entries.id=== data.id)
    //console.log(index)
    state.entries[index].text=data.text
    state.entries[index].titulo=data.idato
}
export const addEntry =  (state,data)=>{
        //console.log('Entro en addEntryMutatio')
        //console.log(data)
        const entry={
            _id:data._id,
            date:data.fccre,
            id:data._id,
            text:data.ornam,
            titulo:data.idato
        }
        //console.log(entry)
        state.entries.push(entry)
}
export const delEntryByID=(state,id)=>{
    //console.log('Entro al Mutation')
    const index = state.entries.findIndex(entries=>entries.id=== id)

    //mi_array.splice(2, 1);
    //console.log(index)
    state.entries.splice(index,1)
}
// fccre: "2021-09-07T19:46:25.422Z"
// idBbr: "612bc7a41521cf8ab020079f"
// idBss: "612bc7a41521cf8ab020079d"
// idWst: "612bc7a41521cf8ab02007a1"
// idato: "esto es otra prueba SUBARU IMPREZA 2010"
// idcnt: "612c291009320794b9c1485d"
// ornam: "esto es otra prueba SUBARU IMPREZA 2010"
// stor: "1"
// __v: 0
// _id: "6137c191b7d25007e73f1fc0"
