# 07-journalapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Crearemos toda la estructura de la aplicación
## Usar Sass
Sass es basicamnte Css con esteriodes. La idea es que trabajemos el estilo utilizando sass. Que no va a permitir un CSS mas ordenado y con funciones.
Podemos perfectamente utilizar tailwind o varios otros.

Utilizaremos tambien estilos con Boostrap en esta sección, los que permitirá enfocarnos en la logica de la aplicación mas que en el estilo.
Para utilizarlo simplemente podremos en el index.html el css dek cdn de bootstrap
~~~
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
~~~
Esto hará que utilñicemos la configuración por defecto.

Lo que vamos hacer es instalarlo como dependencia de nuestro proyecto
~~~
npm install bootstrap
~~~

Para incorporarlo a nuestro proyecto:
1. Crear carpeta styles dentro de src y allí el archivo stytles.scss
2. importar el archivo de estilos en el main
~~~
import './styles/styles.scss'
~~~
3. instalar dependencias saas-loader y saas para desarrollo
   con npm
   ~~~
   npm install -D sass-loader@10 sass
   ~~~
   con yarn
   ~~~
   yarn add -D saas-loader@10 sass

## Cambiar los colores por defecto de bootstrap
Agregamos los colores del tema [docuemntacion de bootstrap](https://getbootstrap.com/docs/5.1/customize/color/)

## Estructura modular
Una estructura modular nos permitira contar con un orden e independencia entre los modulos
src
+--modulo
+---layouts
+---router
+---components
+---views

## Estructura del DayBookLayout
utilizaremos el cdn de fontawesome de [enlace cdn fa](https://cdnjs.com/libraries/font-awesome/5.15.3)
y lo pondremos en el index.html
~~~
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
~~~

## Compoenentes Entry List y Entry

## instalar Vuex y crear un modulo reutilizable

Instalaremos vuex y lo utilizaremos en form modularizada

Instalamos vuex en nuestro entorno

~~~
npm install vuex@next --save
~~~

Crearemos las carpetas store, uno en el src y otro en el modulo daybook
el store del src es el store global
en tanto que el store dentro de la carpeta daybook es el store para el módulo daybook

Lo primero que crearemos un un template de la implementacion de vuex dentro de una carpeta llamada module-template
con los siguientes archivos:
- actions.js que tiene las acciones que luego llamaran un commit de una mutación (pueden ser asincronas)
- getters.js donde tendremos los getters que nos permitirna obtener la información del state
- mutations.js donde tendremos las mutaciones que nos permitirna hacer las modificaciones del state
- state.js el state es reactivo y cuando se cambie el state le va a notificar a todos los componentes o lugares dónde se esten esuchando los cambios de nuestro estate
- index.js dònde pondremos todo junto para que funcione, es lo que nosotros vamos a terminar importando en el store que vamos a definir

Recordemos que este module-template es un cascarón que nos permitira crear el store

## Journal Vuex Model
compiamos el module-template en store de daybook
y configuarmos en index en el store principal
~~~
import journal from '../modules/daybook/store/journal'
const store = createStore({
    modules:{
        journal
    }
})
~~~

Adicionalmente ponemos el store en el punto mas alto de la aplicacion en el archivo main


## Entradas ficticias y punto de restauración

Creamos un realese tag
~~~
git tag -a v1.0.0 -m "Vuex configurado - Journal"
~~~

## mapGetters getEntriesByTerm


# Seccion 12
## peticion al backend
creamos creamos la carpeta api en el src y alli configuramos la instancia de axios.
Luego en actions del store del juornal hacemos la peticion, en nuetro caso, hacemos la petición a **loadEntries**
por último en nuestra vista **EntryView**, accedemos a nuestra action mediante mapActions y llamammos a la función al momento de crear el objeto

## Primera mutacion
~~~
export const setEntries =  (state, entries)=>{
    state.entries=[...state.entries, ...entries]
    state.isLoading=false

}
~~~
## transición carga

## FAB Emitir acción
archivos **EntryVue** y **Fab**

## Actualizar un registro CRUD


## Perparacion para la creaciíon de nuevos registros

## Borrar un registro

## Mensajes de confirmación y espera

Utilizaremos 
SweetAlert2
para mostrar los mensajes de confirmación y espera

~~~
npm install sweetalert2
~~~
Básicamente las alrtas las necesitamos en componente **EntryView.vue**, por lo tanto ahí es dónde importaremos el paquete.

~~~
import Swal from 'sweetalert2'
~~~

## Seleccionar u mostrar una imagen local

## Referencias locales

# Seccion 13 Test

Tendremos que instalar el unit-jest test, la documentación la podemos ver [aqui](https://cli.vuejs.org/core-plugins/unit-jest.html#configuration)

~~~
vue add unit-jest
~~~

Se tiene que crear la misma estructura de carpetas del src en el directorio /test/unit

~~~
import { shallowMount } from '@vue/test-utils'
import About from '../../../src/views/About.vue'

describe('/src/views/About', () => {
  test('Snapshot Abuot', () => {
    
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
~~~

La primera imprtación es el shallowMount que nos permite montar solo el componenete, no los componentes hijos, para utilizar los componentes hijos se utiliza el **mount**.

La segunda importación es el componente que se desea probar.

## Primeras pruebas en el router
**Home.spec.js**ç
## Pruebas Fab Component
Prueba de emision
## Pruebas en el DayBook Router
pruebas en test/units/modules/daybook/router/index.spec.js
1 comprabamos que el objeto esté igual
2 Comprobar que la rutas carguen
3 probar funcion de mapeo de ruta

## Pruebas de cargas de archivos


## Pruebas del Store
configuyrtacion del store

## Mutations setEntries

## Actions Test

## Pruebas el Componente Entry
