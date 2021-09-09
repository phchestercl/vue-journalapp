import daybookRouter from '../../../../../src/modules/daybook/router'

describe('Pruebas Router Daybook Module', () => {
    test('Configuración del Router', () => {

        //console.log(daybookRouter)
        // comprobamos la estructura general de la funcion
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                { path: '', name: 'no-entry', component: expect.any(Function) },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ]
        })
    })
    test('coprueba carga de rutas',async ()=>{
        //console.log(await daybookRouter.children[0].component().default.name)
        //const res=await daybookRouter.children[0].component()
        //expect((await daybookRouter.children[0].component()).default.name).toBe('NoEntrySelected')
        //expect((await daybookRouter.children[1].component()).default.name).toBe('EntryView')
        //Una forma mas flexible
        const promiseRoute=[]
        daybookRouter.children.forEach(child=>promiseRoute.push(child.component()))
        //console.log(promiseRoute)
        const routes = (await Promise.all(promiseRoute)).map(r=>r.default.name)
        //console.log(routes)
        expect(routes).toContain('EntryView')
        expect(routes).toContain('NoEntrySelected')
    })
    test('Probar funcion de mapeo de ruta: Rotornar el id de la ruta', async()=>{
        const route={
            params:{
                id:'ABC-123'
            }
        }
        //console.log(route.params)
        //console.log((await daybookRouter.children[1]).props(route))
        //expect((await daybookRouter.children[1]).props(route)).toStrictEqual(route.params)
        const entryRoute =daybookRouter.children.find(route=>route.name==='entry')
        expect(entryRoute.props(route)).toStrictEqual(route.params)
    })

})