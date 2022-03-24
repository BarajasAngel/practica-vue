<template>
  <article class="containerContact">
    <section class="informacionContact">
      <span class="tituloContact"> Contactarnos </span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero hic
        accusantium sequi pariatur ad dolor molestias quae asperiores. Similique
        accusamus dolorem rem reprehenderit sit numquam ut. Officiis eveniet
        sunt consequuntur?
      </p>
    </section>
    <section class="contenidoContact informacionContact">
      <span class="tituloContact"> Boletín electrónico </span>
      <input type="text" placeholder="Nombre Completo" class="contacto-input" />
      <input type="text" placeholder="Correo" class="contacto-input" />
      <button class="button-enviar">Enviar</button>
    </section>
  </article>
</template>
<style scoped>
.containerContact {
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
  margin: 3rem;
  line-height: 2.5rem;
  text-align: justify;
  margin-top: 10rem;  
  position: relative;
  top: -10rem;
}
.tituloContact {
  font-size: 2rem;  
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
}
.informacionContact{
  background-color: #b07d62;
  padding: 3rem;
  border-radius: 8px;
  color:white;
}
section.contenidoContact {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;    
}
.contacto-input{
  padding: 0.6rem;
  margin: 0.5rem;
}
.button-enviar{
  padding: 1rem 3rem;
  align-self: flex-end;
}
</style>
