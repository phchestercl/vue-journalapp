import { shallowMount } from '@vue/test-utils'
import Entry from '@/modules/daybook/components/Entry.vue'
import { journalState } from '../../../mock-data/test-journal-state'


//console.log(journalState.entries)

describe('Entry Component', () => {
    let mockRouter
    let wrapper

    beforeEach(() => {
        mockRouter = {
            push: jest.fn()
        }
        wrapper = shallowMount(Entry, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            },
            props: {
                entry: journalState.entries[0]
            }
        })

    })
    //mock Router
    // const router
    // Match con snapshot

    test('Match snapshot', () => {
        //console.log(journalState)
        //console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()
    })

    // Debe redireccionar al hacer click en el entry container
    test('Redireccionar al hacer click', async () => {
        const entryContainer = wrapper.find('.entry-container')
        //console.log(entryContainer)
        await entryContainer.trigger('click')
        expect(mockRouter.push).toHaveBeenCalledTimes(1)
        expect(mockRouter.push).toHaveBeenCalledWith({ name: 'entry', params: { id: journalState.entries[0].id } })
    })
    // pruebas en las propiedades computadas
    // wrapper.vm <--- ver la propiedades computadas
    test('Pruebas en Propuedades computadas', () => {
        const wrapper = shallowMount(Entry, {
            /* global:{
                mocks:{
                    $router:mockRouter
                }
            }, */
            props: {
                entry: journalState.entries[0]
            }
        })
        //console.log(wrapper.vm.entry.date)
        //const yearDay = wrapper.vm.yearDay
        //console.log(yearDay)
        expect(wrapper.vm.day).toBe(7)
        expect(wrapper.vm.month).toBe('Septiembre')
        expect(wrapper.vm.yearDay).toBe('2021, Martes')
    })
})