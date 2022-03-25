<template>
    <headerGeneral />
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
import headerGeneral from '@/components/HeaderGeneral.vue'
import DataTable from '@/components/DataTable.vue'
import Footer from '@/components/FooterGeneral.vue'
export default {
    name: "SucursalesView",
    components: {
        headerGeneral,
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