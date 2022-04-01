<template>
  <article>
    <section class="card-section">
      <h2 class="margin-subtitulo">¡Lo más exquisito!</h2>
      <div class="card-container">
        <figure v-for="show in $store.state.cakeShow" :key="show.id">
          <img
            class="card-img"
            @mouseover="mostrar(show.name)"
            @mouseleave="ocultar(show.name)"
            :src="show.url"
            :alt="show.name"
          />
          <div class="text" :id="show.name">
            <span>{{ show.name }}</span>
          </div>
        </figure>
      </div>
    </section>
  </article>
</template>
<script>
export default {
  methods: {
    mostrar: function (id) {
      const text = document.getElementById(id);
      text.style.opacity = "1";
      text.style.fontSize = "2rem";
    },
    ocultar: function (id) {
      const text = document.getElementById(id);
      text.style.opacity = "0";
      text.style.fontSize = "0rem";
    },
  },
};
</script>

<style scoped>
.text {
  opacity: 0;
  color: white;
  position: relative;
  font-size: 2rem;
  left: 10%;
  top:-50%;
  text-align: left;
  font-size: 0px;
  transition: all 0.5;
  width: 0%;
}
.card-section {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  position: relative;
  top: -7rem;
  overflow: hidden;
}
.margin-subtitulo {
  font-family: 'Caveat', cursive;
  margin-bottom: 4rem;
  font-size: 4.9rem;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0px 2.8rem;
}
.card-img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}
.card-img:hover {
  width: 105%;
  justify-self: center;
  border-radius: 0.5rem;
  cursor: pointer;
  -webkit-box-shadow: 0px 14px 36px -5px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 14px 36px -5px rgba(0, 0, 0, 0.64);
  box-shadow: 0px 14px 36px -5px rgba(0, 0, 0, 0.64);
  transition: width 0.4s;
  filter: brightness(60%);
  overflow: hidden;
}
@media (max-width:750px) {
  .card-container{
    grid-template-columns: repeat(2, 1fr);
  }
  .card-section{
    top: -12rem;
  }
}
@media (max-width:574px) {  
  .card-section{
    top: -18rem;
  }
}
@media (max-width:500px) {
    .card-container{
    grid-template-columns: 1fr;
  }
}
</style>
