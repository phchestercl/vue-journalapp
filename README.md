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
  
  
