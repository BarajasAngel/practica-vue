<template>
  <article>
    <section class="imagen-principal">
      <div class="container-titulo">
        <h1>lorem</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero hic
          accusantium sequi pariatur ad dolor molestias quae asperiores.
          Similique accusamus dolorem rem reprehenderit sit numquam ut. Officiis
          eveniet sunt consequuntur?
        </p>
        <button class="button-comprar">Comprar Ahora</button>
      </div>
    </section>
  </article>
</template>
<style scoped>
.imagen-principal {
  background-image: url("../assets/1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -9.5rem;
}
.container-titulo {
  margin: 0px 4rem;
  text-align: justify;
  line-height: 2.3rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4rem;
  gap: 2rem;
  -webkit-box-shadow: -200px 0px 0px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -200px 0px 0px 0px rgba(0, 0, 0, 0.6);
  box-shadow: -200px 0px 0px 0px rgba(0, 0, 0, 0.6);
}
.button-comprar {
  border: none;
  background-color: black;
  color: white;
  padding: 1.5rem;
  opacity: 0.8;
  border-radius: 0.7rem;
  margin: 0rem 8rem;
}
.button-comprar:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}

@media (max-width: 900px) {
  h1 {
    font-size: 5rem;
    animation: all 1s;
  }
  .container-titulo {
    font-size: 1.6rem;
    margin: 0rem;
    padding: 3rem;
    gap: 1rem;
    position: relative;
    top: 7rem;
    animation: all 1s;
  }
  .button-comprar {
    font-size: 1rem;
    margin: 0rem;
  }
}
@media (max-width: 750px) {
  .imagen-principal {
    top: -15.4rem;
  }
}
@media (max-width: 574px) {
  h1 {
    font-size: 4rem;
  }
  .imagen-principal {
    top: -21.8rem;
  }
  .container-titulo {
    font-size: 1.6rem;
    top: 11rem;
    line-height: 2rem;
  }
}
@media (max-width:447px){
  .imagen-principal{
    grid-template-columns: 1fr ;
  }
  .container-titulo {
    font-size: 1.6rem;
    top: 11rem;
    line-height: 2rem;
  }
}
</style>
