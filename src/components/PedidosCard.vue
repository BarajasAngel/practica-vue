<template>
  <article class="container-caja">
    <section class="container-secundario">
      <span id="Nombre"> Nombre Completo: </span>
      <span id="Correo"> Correo: </span>
      <p id="Datos Extras">
        Holasas
      </p>
      <button>Comprar Ahora</button>
    </section>
    <section class="container-secundario">
      <span id="Nombre"> Nombre Completo: </span>
      <span id="Correo"> Correo: </span>
      <p id="Datos Extras">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat
        maxime totam, sequi obcaecati a accusamus, voluptas dignissimos
        distinctio aliquid nulla nemo debitis! Eaque facilis at exercitationem.
        Ea, iste animi.
      </p>
      <button>Comprar Ahora</button>
    </section>
    <section class="container-secundario">
      <span id="Nombre"> Nombre Completo: </span>
      <span id="Correo"> Correo: </span>
      <p id="Datos Extras">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat
        maxime totam, sequi obcaecati a accusamus, voluptas dignissimos
        distinctio aliquid nulla nemo debitis! Eaque facilis at exercitationem.
        Ea, iste animi.
      </p>
      <button>Comprar Ahora</button>
    </section>
    <section class="container-secundario">
      <span id="Nombre"> Nombre Completo: </span>
      <span id="Correo"> Correo: </span>
      <p id="Datos Extras">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat
        maxime totam, sequi obcaecati a accusamus, voluptas dignissimos
        distinctio aliquid nulla nemo debitis! Eaque facilis at exercitationem.
        Ea, iste animi.
      </p>
      <button>Comprar Ahora</button>
    </section>
  </article>
</template>
<style scoped>
.container-caja{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;
    padding: 0rem 10rem;
    gap: 2.8rem;        
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
