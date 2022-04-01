<template>
    <div class="pastelero">
        <HeaderPastelero/>        
        <div class="espaciados morado">
            <h2>
                Capacidad de Sabores
            </h2>
            <Sabores tipo="Sabores"/>
        </div>
        <div class="espaciados verde">
            <h2>
                Capacidad de Decoraciones
            </h2>
            <Sabores tipo="Decoraciones"/>
        </div>
        <div class="espaciadosCliente azul">
            <h2>
                Pedidos 
            </h2>
            <ClienteDatos />
        </div>
        <FooterGeneral/>
    </div>
</template>
<script>
import HeaderPastelero from '@/components/HeaderPastelero.vue'
import Sabores from '@/components/SaboresRestantes.vue'
import ClienteDatos from '@/components/PedidosCard.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'
export default {
    components:{
        HeaderPastelero,
        Sabores,
        ClienteDatos,
        FooterGeneral
    }
}
</script>
<style scoped>
.espaciados{
    padding: 4rem  15rem;    
    margin: 10rem 0rem;
}
.espaciadosCliente{
    padding: 4rem  5rem;    
    margin: 10rem 0rem;
}
.morado{
    background-color: #3a54a856;
}
.verde{
    background-color: #8bb46256;
}
.azul{
    background-color: #6288b456;
}
h2{
    position: relative;
    top:0;
    left: 0;
    margin-bottom: 4rem;
    font-size: 2.8rem;
    color: black;
    text-align: center;
}
</style>