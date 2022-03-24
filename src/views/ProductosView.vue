<template>
    <div class="productos">        
        <h1>
            lorem impus
        </h1>
        <div class="containerCard">
            <h2>Pasteles</h2>
            <ProductosCard class="Card" :card="'Pasteles'"/>
        </div>
        <div class="containerCard">
            <h2>Sabores</h2>
            <ProductosCard class="Card" :card="'Sabores'"/>
        </div>
        <div class="containerCard">
            <h2>Decoraciones</h2>
            <ProductosCard class="Card" :card="'Decoraciones'"/>
        </div>
        <Footer/>        
    </div>
</template>

<script>
import Footer from '@/components/FooterGeneral.vue'
import ProductosCard from '@/components/ProductosCard.vue'

export default{
    name: 'ProductosView',
    components: {
        ProductosCard,
        Footer
    }
}
</script>
<style scoped>
h1{
    display: flex;
    justify-content: center;
    font-size: 4rem;
    margin: 3rem 0rem;
}
.Card{
    user-select: none;
}
.containerCard{
    margin: 5rem 0rem;
}
.containerCard h2{    
    font-size: 3.2rem;        
    margin-left: 15%;
}
</style>
