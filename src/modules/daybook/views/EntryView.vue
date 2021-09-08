<template>
  <!-- <h1>Hola Mundo es una nueva entrada</h1> -->
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ fecha.day }}</span>
        <span class="mx-1 fs-3">{{ fecha.month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ fecha.yearDay }}</span>
      </div>
      <div>
        
        <input 
          type="file" 
          @change="onSelectedImage"
          ref="imageSelector"
          accept="image/*"
          v-show="false"
          >
        <button v-if="entry.id" @click="delEntry" class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button @click="onSelectImage"  
                class="btn btn-primary">
          Subir Foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="Que sucedio hoy"></textarea>
    </div>
  </template>

  <Fab icon="fa-save" @on:click="saveEntry" />
  <!-- <img
    src="https://www.autobild.es/sites/autobild.es/public/styles/855/public/dc/fotos/Volvo_S60_03.jpg?itok=1zT-Ffz-"
    alt="Volvo"
    class="img-thumbnail"
  /> -->
  <img
    v-if="localImage"
    :src="localImage"
    alt="entry-picture"
    class="img-thumbnail"
  />
  <img
    v-if="imgFile && !localImage"
    :src="imgFile"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>


<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImage from '../helpers/uploadImage'
export default {
  props: {
    id: { type: String, required: true },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  data() {
    return {
      entry: null,
      fecha: null,
      localImage:null,
      imgFile:null
    };
  },
  created() {
    this.loadEntry();
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
  },
  methods: {
    loadEntry() {
      let entry;
      if (this.id === "new") {
        //const newDate =new Date().toISOString()
        entry = {
          text: "",
          date: new Date().toISOString(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
      this.fecha = getDayMonthYear(entry.date);
      this.imgFile= entry.titulo
    },
    ...mapActions("journal", ["upDateEntry", "createEntry", "deleteEntry"]),
    async saveEntry() {
      // SweetAlert
      new Swal({
        title: "Espere por Favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const picture= await uploadImage(this.imgFile)
      console.picture
      if (this.id !== "new") {
        const data = { id: this.id, text: this.entry.text,idato:picture };
        await this.upDateEntry(data);
        this.$router.push({ name: "no-entry" });
      } else {
        const data = {
          idBss: "612bc7a41521cf8ab020079d",
          idBbr: "612bc7a41521cf8ab020079f",
          idWst: "612bc7a41521cf8ab02007a1",
          idcnt: "612c291009320794b9c1485d",
          idato: picture,
          ornam: this.entry.text,
          stor: 1,
        };
        await this.createEntry(data);
        this.$router.push({ name: "no-entry" });
      }
      Swal.fire("Guardado", "Entrada Registrada", "success");
    },
    async delEntry() {
      /* Swal.fire({
        title: "Esta Seguro de Eliminar la Orden de Trabajo?",
        text: "No podrá revertir el borrado",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteEntry(this.id);
          Swal.fire("Borrado!", "La Orden de Trabajo fue Borrada.", "success");
          this.$router.push({ name: "no-entry" });
        }
      }); */
      const resul = await Swal.fire({
        title:'¿Está seguro de borrar la Orden de Trabajo?',
        text:'Una vez borrda, no se podrá recuperar.',
        showDenyButton:true,
        confirmButtonText:'Si, estoy seguro'
      })
      if(!resul.isConfirmed) return
      new Swal({
        title:'Espere por favor ...',
        allowOutsideClick:false
      })
      Swal.showLoading()
      await this.deleteEntry(this.id);
      Swal.fire("Borrado!", "La Orden de Trabajo fue Borrada.", "success");
      this.$router.push({ name: "no-entry" });
      
    },
    onSelectedImage(event){
      const file =event.target.files[0]
      if(!file) {
        this.localImage=null
        this.imgFile=null
        return
      }
      // si tenemos el archivo lo procesaremos
      this.imgFile=file
      const fr = new FileReader()
      fr.onload = ()=>this.localImage = fr.result
      fr.readAsDataURL(file)
    },
    onSelectImage(){
      //crea una referencia local al input file el que va a estar oculto
      // con this.$refs tenemos acceso a las referencias
      //console.log(this.$refs)
      this.$refs.imageSelector.click()
    }
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>