<template>
  <!-- <h1>Hola Mundo es una nueva entrada</h1> -->
  <div class="entry-title d-flex justify-content-between p-2">
      <div>
          <span class="text-success fs-3 fw-bold">15</span>
          <span class="mx-1 fs-3 ">Septiembre</span>
          <span class="mx-2 fs-4 fw-light">2021</span>

      </div>
      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>
           <button class="btn btn-primary ">
              Subir Foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="Que sucedio hoy"></textarea>

  </div>
  <Fab icon="fa-save"/>
  <img 
    src="https://www.autobild.es/sites/autobild.es/public/styles/855/public/dc/fotos/Volvo_S60_03.jpg?itok=1zT-Ffz-" 
    alt="Volvo"
    class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Fab:defineAsyncComponent(()=>import('../components/Fab.vue'))
    }

}
</script>

<style lang="scss" scoped>
    textarea{
        font-size: 20px;
        border:none;
        height: 100%;
        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color:#000000,$alpha:0.2);
    }
</style>