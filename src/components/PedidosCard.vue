<template>
  <article class="container-caja" v-for="(pedidos,index) in $store.state.user" :key="index">
    <section class="container-secundario">
      <span id="Nombre"> Nombre Completo: {{pedidos.name}} </span>
      <span id="Correo"> Correo: {{pedidos.email}}</span>
      <span id="telefono"> Teléfono: {{pedidos.phone}}</span>
      <p id="Datos Extras">
        {{pedidos.text}}
      </p>
      <button>Enviar Pedido</button>
    </section>  
  </article>
</template>
<style scoped>
.container-caja{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    justify-content: center;
    align-items: center;
    padding: 0rem 10rem;
    margin: 5rem 0rem;    
}   
.container-secundario{
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    line-height: 3rem;    
    text-align: justify;
    min-height: 28rem;
    padding: 5rem;
    background-color: white ;
    border-radius: 1rem;
    -webkit-box-shadow: 10px 10px 41px -11px rgba(0,0,0,0.33);
    -moz-box-shadow: 10px 10px 41px -11px rgba(0,0,0,0.33);
    box-shadow: 10px 10px 41px -11px rgba(0,0,0,0.33);
}
</style>
