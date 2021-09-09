import { createStore } from 'vuex'
import { shallowMount } from '@vue/test-utils'
import EntryList from '@/modules/daybook/components/EntryList.vue'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../mock-data/test-journal-state'


const createVuexStore = (initialSate) => createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialSate }
        }
    }
}
)
describe('EntryList componnet', () => {
    //console.log(journal)

    let mockRouter
    let wrapper
    let store
    beforeEach(() => {
        store=createVuexStore(journalState)
        mockRouter = {
            push: jest.fn()
        }
        wrapper = shallowMount(EntryList, {
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins:[store]
            }
            
        })

    })
    test('Primera Prueba', () => {
        //console.log(wrapper.vm)
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('Debe llamar el getEntriesByTerm sin termino y mostra 2 entradas',()=>{
        expect(wrapper.vm.getEntriesByTerm('').length).toBe(2)
        
    })
    test('Deba llamar el getEntriesByTerm y filtrar las entrads',()=>{
        expect(wrapper.vm.getEntriesByTerm('Daniela').length).toBe(1)
        expect(wrapper.vm.getEntriesByTerm('Daniela')).toEqual([journalState.entries[1]])
    })
    test('Llama la funcion goToEntry al hacer click',()=>{
        wrapper.find('button').trigger('click')
        expect(mockRouter.push).toHaveBeenLastCalledWith({name:'entry',params:{id:'new'}})
    })
})


/* const journalMockModule = {
    namespaced: true,
    actions: {
        loadEntries: jest.fn(),
        upDateEntry: jest.fn(),
        createEntry: jest.fn(),
        deleteEntry: jest.fn()
    },
    getters: {
        getEntriesByTerm: jest.fn(),
        getEntryById: jest.fn()
    },
    mutations: {
        setEntries: jest.fn(),
        upDateEntry: jest.fn(),
        addEntry: jest.fn(),
        delEntryByID: jest.fn()
    },
    state: jest.fn()
} */