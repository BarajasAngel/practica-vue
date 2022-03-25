<template>
  <headerGeneral />
  <div class="home">
    <ImgPrincipal />
    <SeccionCard />
    <Contacto />
    <Footer />
  </div>
</template>

<script>
import headerGeneral from "@/components/HeaderGeneral.vue";
import ImgPrincipal from "@/components/ImgPrincipal.vue";
import SeccionCard from "@/components/SeccionCard.vue";
import Contacto from "@/components/HomeContact.vue";
import Footer from "@/components/FooterGeneral.vue";

export default {
  name: "HomeView",
  components: {
    headerGeneral,
    ImgPrincipal,
    SeccionCard,
    Contacto,
    Footer,
  },
};
</script>
