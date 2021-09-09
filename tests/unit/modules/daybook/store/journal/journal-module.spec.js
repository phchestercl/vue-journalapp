// Tenemos que tener el store tal cual esta definido en la app
import { createStore } from 'vuex'
import journal from '../../../../../../src/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'

const createVuexStore = (initialSate) => createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialSate }
        }
    }
}
)
const testEntries = [
    {
        _id: 'id01',
        id: 'id01',
        date: "2021-09-07T23:14:07.202Z",
        titulo: 'titulo',
        text: 'Texto de prueba DOS'
    },
    {
        _id: 'id02',
        id: 'id02',
        date: "2021-09-07T23:14:07.202Z",
        titulo: 'titulo',
        text: 'Texto de prueba'
    }
]


describe('Vuex - Pruebas en Journal Module', () => {
    // pruebas básicas
    test('Comprobación de estado inical - Tener este state', () => {
        const store = createVuexStore(journalState)
        //console.log(journalState)
        const { isLoading, entries } = store.state.journal
        //console.log(entries.length)
        expect(isLoading).toBeTruthy()
        expect(entries).toEqual(journalState.entries)
    })
    //Mutaciones
    test('Mutation: setEntries', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })

        //console.log(store)
        //console.log('Entradas iniciales ' + store.state.journal.entries.length)
        //console.log('Entradas journalState ' + journalState.entries.length)

        // console.log(testEntries)
        store.commit('journal/setEntries', testEntries)
        //console.log(store.state.journal.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()
    })
    test('Mutation: upDateEntry', () => {

        const store = createVuexStore({ isLoading: true, entries: [] })
        store.commit('journal/setEntries', testEntries)
        //console.log(store.state.journal.entries)
        const orgEntriesNum = store.state.journal.entries.length
        const data = { id: "id02", text: 'Prueba Update', idato: 'algun link' }
        store.commit('journal/upDateEntry', data)
        expect(store.state.journal.entries[1].text).toBe(data.text)
        expect(store.state.journal.entries[1].titulo).toBe(data.idato)
        expect(store.state.journal.entries.length).toBe(orgEntriesNum)
    })
    test('Mutation: AddEntry', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        store.commit('journal/setEntries', testEntries)
        const orgEntriesNum = store.state.journal.entries.length
        const newEntry = {
            idBss: "612bc7a41521cf8ab020079d",
            idBbr: "612bc7a41521cf8ab020079f",
            idWst: "612bc7a41521cf8ab02007a1",
            idcnt: "612c291009320794b9c1485d",
            idato: "Land Nueva",
            ornam: "Alineación Harry Chester Land Rover Dicovery 2019",
            stor: 1,
            _id: "6139241a0a64ae19145d8f1a",
            fccre: "2021-09-08T20:59:06.644Z",
            __v: 0
        }
        store.commit('journal/addEntry',newEntry)
        expect(store.state.journal.entries.length).toBe(orgEntriesNum+1)
        expect(store.state.journal.entries[2]._id).toBe(newEntry._id)
    })
    test('Mutation: delEntryByID', () => {
        const store = createVuexStore(journalState)
        const orgEntriesNum = store.state.journal.entries.length
        const id="6137f23f7f283c228118d7b2"
        store.commit('journal/delEntryByID',id)
        expect(store.state.journal.entries.length).toBe(orgEntriesNum-1)
        expect(store.state.journal.entries.find(r=>r.id===id)).toBeFalsy()
        expect(store.state.journal.entries.find(r=>r.id==='6137e61e7f283c228118d791')).toBeTruthy()
    })
    // Pruebas de los getters
    test('Getters getEntriesByTerm getEntryById',()=>{
        const store = createVuexStore({ isLoading: true, entries: testEntries })
        //console.log(store.state.journal.entries.length)
        const [entry1]=testEntries 
        expect(store.getters['journal/getEntriesByTerm'](' ').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('DOS').length).toBe(1)
        expect(store.getters['journal/getEntriesByTerm']('DOS')).toEqual([entry1])
        //console.log(store.state.journal.entries)
        expect(store.getters['journal/getEntryById']('id01')).toBeTruthy()
        expect(store.getters['journal/getEntryById']('id01')).toEqual(testEntries[0])
        //expect(store.getters['journal/getEntryById']('6137e61e7f283c228118d791').length).toBe(1)


    })
    // pruebas a Actions ==========================================
    // Las pruebas de los aciotn se ejecutan directamente en la base de datos
    test('actions: loadEntries',async()=>{
        const store =createVuexStore({ isLoading: true, entries: [] })
        await store.dispatch('journal/loadEntries')
        //console.log(store.state.journal.entries)
        expect(store.state.journal.entries.length).toBe(4)
    })
    test('actions: upDateEntry',async()=>{
        const store =createVuexStore({ isLoading: true, entries: [] })
        await store.dispatch('journal/loadEntries')
        //selecionamos la primera entrada 
    })
})