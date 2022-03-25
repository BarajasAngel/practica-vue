<template>
  <headerGeneral />
  <div class="productos">
    <h1>¡Lo más comprado!</h1>
    <div class="containerCard fondo1">
      <h2>Pasteles</h2>
      <ProductosCard class="Card" :card="'Pasteles'" />
    </div>
    <div class="containerCard fondo2">
      <h2>Sabores</h2>
      <ProductosCard class="Card" :card="'Sabores'" />
    </div>
    <div class="containerCard fondo3">
      <h2>Decoraciones</h2>
      <ProductosCard class="Card" :card="'Decoraciones'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/FooterGeneral.vue";
import ProductosCard from "@/components/ProductosCard.vue";
import headerGeneral from "@/components/HeaderGeneral.vue";

export default {
  name: "ProductosView",
  components: {
    headerGeneral,
    ProductosCard,
    Footer,
  },
};
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  margin: 3rem 0rem;
}
.Card {
  user-select: none;
}
.containerCard {
  margin: 3rem 0rem;
  padding: 2rem 0rem;
  background-color: #ffded9b7;
  border-radius: 1rem;
}
.containerCard h2 {
  font-size: 4.2rem;
  margin-left: 15%;
  font-family: "Caveat", cursive;
}
.fondo1 {
  background-color: #ffded9a4;
}
.fondo2 {
  background-color: #d5ccff73;
}
.fondo3 {
  background-color: #cdffcc73;
}
</style>
