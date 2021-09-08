import { shallowMount } from '@vue/test-utils'
import Fab from '../../../../../src/modules/daybook/components/Fab.vue'
describe('Fab Componente',()=>{
    test('Snapshot',()=>{
        const wrapper = shallowMount(Fab)
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('Utiliza clase por defecto',()=>{
        const wrapper =shallowMount(Fab)
        const clsDefault= wrapper.find('i').classes('fa-plus')
        expect(clsDefault).toBeTruthy
    })
    test('Enviar clase distinta a la clase por defecto',()=>{
        const wrapper = shallowMount(Fab,{
            props:{
                icon:'fa-circle'
            }
        })
        const cls=wrapper.find('i').classes('fa-circle')
        expect(cls).toBeTruthy()
    })
    test('Emite on:click al hacer click', async()=>{
        /* const mockEmit={
            $emit:jest.fn()
        } */
        const wrapper =shallowMount(Fab)
        wrapper.find('button').trigger('click')
        //console.log(wrapper)
        console.log(wrapper.emitted('on:click'))
        
        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })
})