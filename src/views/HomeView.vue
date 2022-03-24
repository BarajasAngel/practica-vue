<template>
  <div class="home">
    <ImgPrincipal/>
    <SeccionCard/>
    <Contacto/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImgPrincipal from '@/components/ImgPrincipal.vue'
import SeccionCard from '@/components/SeccionCard.vue'
import Contacto from '@/components/HomeContact.vue'
import Footer from '@/components/FooterGeneral.vue'

export default {
  name: 'HomeView',
  components: {
    ImgPrincipal,
    SeccionCard,
    Contacto,
    Footer
  }
}
</script>
