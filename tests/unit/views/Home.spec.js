// Aqui probaremos es que el router .push sea llamado y entregue los argumentos que se esperan.
// tenemos que probar solo lo que nnosotros himos, no las librerias de terceros
import { shallowMount } from '@vue/test-utils'
import Home from '../../../src/views/Home.vue'
describe('Home',()=>{
     test('Snapshot Home',()=>{
         const wrapper = shallowMount(Home)
         expect(wrapper.html()).toMatchSnapshot()
     })
     test('Hacer click debe de redireccionar a no-entry',()=>{
        const mockRouter={
            push:jest.fn()
        }
        const wrapper = shallowMount(Home,{
            global:{
                mocks:{
                    $router:mockRouter
                }
            }
        })
        wrapper.find('button').trigger('click')
        //comprobar que se llame a la funcion
        expect(mockRouter.push).toHaveBeenCalled()
        // comprobar que la función haya sido llamada con {name:'no-entry}
        expect(mockRouter.push).toHaveBeenCalledWith({name:'no-entry'})
     })
})