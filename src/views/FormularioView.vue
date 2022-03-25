<template>
    <headerGeneral/>
    <div class="form">        
        <span>Formulario de Compra</span>        
        <Inputs/>
        <Sabores/>
        <Decoracion/>
        <Datos/>
        <div class="btn">
            <button >Comprar Ahora</button>
        </div>
        <Footer/>        
    </div>
</template>
<script>
import Inputs from '@/components/InputsText.vue'
import Sabores from '@/components/SelectSabores.vue'
import Decoracion from '@/components/SectionDecoraciones.vue'
import Datos from '@/components/DatosExtra.vue'
import Footer from '@/components/FooterGeneral.vue'
import headerGeneral from '@/components/HeaderGeneral.vue'

export default {
    name: 'formularioView',
    components: {
        headerGeneral,
        Inputs,
        Sabores,
        Decoracion,
        Datos,
        Footer
    }
}
</script>
<style scoped>
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;    
}
span{
    align-self: center;
    font-size: 5.8rem;
    margin-top: 2rem;    
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    padding: 2.3rem;
    width: 30rem;
    color:white;
    background-color: rgba(0, 0, 0, 0.76);
    border: none ;
    border-radius: 0.6rem;
    margin-bottom: 3rem;
}
button:hover{
    color:black;
    background-color: white;
    cursor: pointer;
    transition: all 0.2s;
}
</style>