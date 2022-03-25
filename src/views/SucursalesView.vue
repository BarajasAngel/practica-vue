<template>
    <div class="Sucursales">
        <div class="container-table">
            <DataTable Alcaldia="Iztapalapa" class="tabla"/>
            <DataTable Alcaldia="Cuauhtemoc" class="tabla"/>
            <DataTable Alcaldia="Gustavo"    class="tabla"/>
        </div>
        <Footer/>
    </div> 
</template>
<script>
import Footer from '@/components/FooterGeneral.vue'
import DataTable from '@/components/DataTable.vue'
export default {
    name: "SucursalesView",
    components: {
        DataTable,
        Footer
    }
}
</script>
<style scoped>
.container-table{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    place-items: center;
    font-size: 2rem;
}
.tabla{
    margin: 4rem 0rem;
}
</style>