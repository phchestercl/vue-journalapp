export default {
    name:'daybook',
    component:()=>import(/* webpackChunkName: "daybook" */'@/modules/daybook/layouts/DayBookLayout.vue'),
    children:[
        // aqui van todas las rutas que estan relacionadas con nuestro datebook
        {
            path:'',
            name:'no-entry',
            component:()=>import(/* webpackChunkName: "Day book No Entry" */'../../../modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path:':id',
            name:'entry',
            component:()=>import(/* webpackChunkName: "Daybook Entry" */'../../../modules/daybook/views/EntryView.vue')
        }
    ]
}