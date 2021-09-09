import { createStore } from 'vuex'
import { shallowMount } from '@vue/test-utils'
import EntryView from '../../../../../src/modules/daybook/views/EntryView.vue'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../mock-data/test-journal-state'
import Swal from "sweetalert2";
const createVuexStore = (initialSate) => createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialSate }
        }
    }
}
)
jest.mock('sweetalert2',()=>({
    fire:jest.fn() ,
    showLoading:jest.fn(),
    close:jest.fn()
}
))

describe('EntryList componnet', () => {
    //console.log(journal)
    let mockRouter
    let store
    store = createVuexStore(journalState)
    store.dispatch=jest.fn()   //==> con esto evitamos que el dispatch no se ejencute

    mockRouter = {
        push: jest.fn()
    }

    test('debe sacar al usuario por que al id no existe', () => {
        const wrapper = shallowMount(EntryView, {
            props:{id:'este-id-no-existe'},
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
        expect(mockRouter.push).toHaveBeenLastCalledWith({ name: "no-entry" })
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('Debe mostrar la entrada correctamente',()=>{
        //6137f23f7f283c228118d7b2
        const wrapper = shallowMount(EntryView, {
            props:{id:'6137f23f7f283c228118d7b2'},
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
        expect(wrapper.vm.entry).toEqual(journalState.entries[0])
        
    })
    // test de borar la entrada y salir
    test('Borrar entrada y salir',(done)=>{
        // simular en click de borrado
        const wrapper = shallowMount(EntryView, {
            props:{id:'6137f23f7f283c228118d7b2'},
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
        // simula que Swal devuelve la respuesta con true
        Swal.fire.mockResolvedValueOnce( Promise.resolve({isConfirmed:true}))
        
        wrapper.find('.btn-danger').trigger('click')

        expect(Swal.fire).toHaveBeenCalledWith({
            title: "¿Está seguro de borrar la Orden de Trabajo?",
            text: "Una vez borrda, no se podrá recuperar.",
            showDenyButton: true,
            confirmButtonText: "Si, estoy seguro",
          })
          setTimeout(() => {
              expect(store.dispatch).toHaveBeenCalledWith("journal/deleteEntry", "6137f23f7f283c228118d7b2")
              expect(mockRouter.push).toHaveBeenCalledWith({ name: "no-entry" })
              done()
          }, 1);
          // simulacion y espia delete entry
    })



})
