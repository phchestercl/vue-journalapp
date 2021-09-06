<template>
    <Navbar />
    <!-- El nav bar siempre se va a mostrar en el modulo -->
    <div class="d-flex">
        <div class="col-4">
            <Entrylist />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'



export default {
    components:{
        Navbar: defineAsyncComponent(()=>import('../components/Navbar.vue')),
        Entrylist:defineAsyncComponent(()=>import('../components/EntryList.vue'))
        
    }
}
</script>