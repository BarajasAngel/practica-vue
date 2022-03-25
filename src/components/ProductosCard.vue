<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"            
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,      
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <template v-if="card == 'Pasteles'">
      <swiper-slide v-for="show in $store.state.cakeShow" :key="show.id">
        <img :src="show.url" :alt="show.name" />
        <span class="precio">
          {{show.precio}}
        </span>
      </swiper-slide>
    </template>
    <template v-if="card == 'Sabores'">
      <swiper-slide v-for="show in $store.state.tasteCake" :key="show.id">
        <img :src="show.url" :alt="show.name" />
        <span class="precio">
          {{show.precio}}
        </span>
        <span class="nombre">
          {{show.name}}
        </span>
      </swiper-slide>
    </template>
    <template v-if="card == 'Decoraciones'">
      <swiper-slide v-for="show in $store.state.decorationCake" :key="show.id">
        <img :src="show.url" :alt="show.name" />
        <span class="precio">
          {{show.precio}}
        </span>
        <span class="nombre">
          {{show.name}}
        </span>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  name: "ProductosCard",
  props: {
    card: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 31.5rem;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.precio{
  position:relative;
  top:-18%;
  left:5%;
  color: black;
  font-size: 2.2rem;
  background-color: rgb(217, 230, 255,0.7);
  border-radius: 1rem;  
  padding: 0.2rem 0.5rem;
}
.nombre{
  position:relative;
  top:-75%;
  left:10%;
  color: black;
  font-size: 2.2rem;
  background-color: rgb(217, 230, 255,0.7);
  border-radius: 1rem;  
  padding: 0.2rem 0.5rem;
}
</style>
