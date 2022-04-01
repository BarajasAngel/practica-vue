<template>
  <div class="container-porcentaje" v-if="tipo == 'Sabores'">
    <div class="box" v-for="sabor in $store.state.tasteCake" :key="sabor.id">
      <div class="percent">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" :style="{'stroke':sabor.color, 'stroke-dashoffset':sabor.porcentaje}"></circle>
        </svg>
        <div class="number">
          <h2>{{sabor.numero}} <span>%</span></h2>
        </div>
      </div>
      <h2 class="text">{{sabor.name}}</h2>
    </div>
  </div>
  <div class="container-porcentaje" v-if="tipo == 'Decoraciones'">
    <div class="box" v-for="decoracion in $store.state.decorationCake" :key="decoracion.id">
      <div class="percent">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" :style="{'stroke':decoracion.color, 'stroke-dashoffset':decoracion.porcentaje}"></circle>
        </svg>
        <div class="number">
          <h2>{{decoracion.numero}} <span>%</span></h2>
        </div>
      </div>
      <h2 class="text">{{decoracion.name}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    tipo: String
  },
  methods:{
    color: function(){
      const color = document.getElementsByClassName("porcentaje-sabores");
      color.style.stroke = "#cf1500";
    }
  }    
}
</script>
<style scoped>
.container-porcentaje {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  justify-content: center;
  align-items: center;   
}
.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  padding: 4rem 1rem;
}
.box .percent {
  position: relative;
  width: 150px;
  height: 150px;
}
.box .percent svg {
  position: relative;
  width: 150px;
  height: 150px;
}
.box .percent svg circle {
  width: 150px;
  height: 150px;
  fill: none;
  stroke-width: 10;
  stroke: #000;
  transform: translate(5px, 5px);
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke-linecap: round;
}
.box .percent svg circle:nth-child(1) {
  stroke-dashoffset: 0;
  stroke: #f3f3f3;
}
.box .percent svg circle:nth-child(2) {
  /* el 87 es el valor de porcentaje */
  stroke-dashoffset: calc(440 - (440 * 87) / 100);
  stroke: #03a9f4;
}
.box .percent .number {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
}
.box .percent .number h2 {
  font-size: 48px;
}
.box .percent .number h2 span {
  font-size: 24px;
}
.box .text {
  padding: 10px 0 0;
  color: #999;
  font-weight: 700px;
  letter-spacing: 1px;
}
@media(max-width:860px){
  .container-porcentaje{
    grid-template-columns: 1fr 1fr 1fr;
    gap:2rem;
  }
}
@media(max-width:860px){
  .container-porcentaje{
    grid-template-columns:  1fr 1fr;    
  }
}
@media (max-width:430px){
  .container-porcentaje{
    grid-template-columns: 1fr;    
    margin: 4rem 0rem;
  }
}
</style>
