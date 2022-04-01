<template>
  <headerGeneral />
  <div class="q-pa-md form">
    <!-- @submit="onSubmit" -->
    <q-form class="q-gutter-md container">
      <h2>Formulario de compra:</h2>
      <div class="container-inputs">
        <q-input
          class="input"
          filled
          v-model="name"
          label="Nombre:"
          hint="Introduce tu nombre completo"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor rellena el campo',
          ]"
        />
        <q-input
          class="input"
          filled
          v-model="email"
          label="Correo Electrónico:"
          type="email"
          hint="Introduce tu correo"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor rellena el campo',
          ]"
        />
        <q-input
          class="input"
          filled
          v-model="phone"
          label="Teléfono:"
          type="tel"
          hint="Introduce tu teléfono"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor rellena el campo',
          ]"
        />
      </div>
      <span>Sabores</span>
      <div class="container-checkbox">        
        <q-checkbox            
            v-model="cho"
            label="Chocolate"
          />
          <q-checkbox            
            v-model="vai"
            label="Vainilla"
          />
          <q-checkbox            
            v-model="fre"
            label="Fresa"
          />
          <q-checkbox            
            v-model="lim"
            label="Limón"
          />
          <q-checkbox            
            v-model="caf"
            label="Café"
          />
          <q-checkbox            
            v-model="rdv"
            label="Red velvet"
          />
          <q-checkbox            
            v-model="coc"
            label="Coco"
          />
          <q-checkbox            
            v-model="zan"
            label="Zanahoria"
          />
      </div>
      <span>Decoraciones</span>
      <div class="container-checkbox">
        <q-checkbox
            v-model="fru"
            label="Frutas"
          />
          <q-checkbox
            v-model="fon"
            label="Fondant"
          />
          <q-checkbox
            v-model="cha"
            label="Chantilly"
          />
          <q-checkbox
            v-model="mer"
            label="Merengue"
          />
          <q-checkbox
            v-model="car"
            label="Caramelo"
          />
      </div>
      <span>Detalles Extras:</span>
      <div class="container-textArea">
        <q-input v-model="text" filled type="textarea" />
      </div>
      <div class="container-btn">
        <q-btn
          label="Comprar"
          @click="onSubmit"
          type="button"
          color="primary"
        />
      </div>
    </q-form>
  </div>
  <Footer />
</template>
<script>
import Footer from "@/components/FooterGeneral.vue";
import headerGeneral from "@/components/HeaderGeneral.vue";
import { ref } from "vue";
import { mapMutations } from "vuex";

export default {
  name: "formularioView",
  components: {
    headerGeneral,
    Footer,
  },
  setup() {    
    /* eslint-disable */
    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);    
    const cho = ref(false);
    const vai = ref(false);
    const fre = ref(false);
    const lim = ref(false);
    const caf = ref(false);
    const rdv = ref(false);
    const coc = ref(false);
    const zan = ref(false);
    const fru = ref(false);
    const fon = ref(false);
    const cha = ref(false);
    const mer = ref(false);
    const car = ref(false);
    const text = ref("");
    return {      
      name,
      email,
      phone,
      cho,
      vai,
      fre,
      lim,
      caf,
      rdv,
      coc,
      zan,
      fru,
      fon,
      cha,
      mer,
      car,
      text,
    };
  },
  methods: {
    ...mapMutations([
      "LlenarFormulario",
      "reducirSabores",
      "reducirDecoraciones",
    ]),
    onSubmit() {    
      this.LlenarFormulario({
        nombre: this.name,
        correo: this.email,
        telefono: this.phone,
        detalles: this.text,
      });
      this.reducirSabores({
        cho: this.cho,
        vai: this.vai,
        fre: this.fre,
        lim: this.lim,
        caf: this.caf,
        rdv: this.rdv,
        coc: this.coc,
        zan: this.zan,
      });
      this.reducirDecoraciones({
        fru: this.fru,
        fon: this.fon,
        cha: this.cha,
        mer: this.mer,
        car: this.car,
      });  
      alert("Tu compra ha sido realizada con éxito, por favor espera a que el pastelero confirme el envió")
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  min-width: 75rem;
  background-color: white;
  height: 100%;
  margin: 2rem;
  padding: 2rem;
}
.container-inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.container-inputs > .input {
  padding: 2rem 2rem;
}
.container-checkbox {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 1.6rem;
}
span {
  font-size: 2.4rem;
}
.container-btn {
  padding: 1.6rem 0rem;
}
</style>
