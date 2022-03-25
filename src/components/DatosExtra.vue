<template>
<article class="container-datos">
    <section class="container-textarea">
        <label for="Detalles">Detalles extra:</label>
        <textarea name="Detalles" id="" cols="96" rows="10" placeholder="Escribe aquí los detalles de tu pedido..."></textarea>
    </section>
</article>
</template>
<style scoped>
.container-datos{
    display: flex;
    flex-direction: column;
    place-items: center;    
    margin-bottom: 3rem;
}
.container-textarea{
    display: flex;
    flex-direction: column;
    place-items: center;
}
label{
    justify-self: flex-start;
    align-self: flex-start;
    font-size: 1.8rem;  
    margin: 3rem 0rem;      
}
textarea{
    font-size: 2rem;
}
</style>