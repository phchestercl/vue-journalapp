<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({name:'entry', params:{id:10}}) "
    >
        <!-- titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15 </span>
            <span class="mx-1 fs-5">Septiembre </span>
            <span class="mx-1 fw-light">2021</span>
        </div>
        <div class="entry-description fs-6">
            Esse nostrud voluptate aliquip nostrud officia. Labore dolore occaecat minim aliquip laborum ea ea occaecat mollit et tempor anim sint. Minim minim sunt est aliqua commodo dolore ipsum labore Lorem ut anim ullamco elit culpa.
        </div>
    </div>
</template>
<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color:lighten($color:rgb(99, 97, 97),$amount:45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>



