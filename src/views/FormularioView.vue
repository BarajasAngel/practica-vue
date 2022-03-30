<template>
  <headerGeneral />
  <div class="form">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from "@/components/FooterGeneral.vue";
import headerGeneral from "@/components/HeaderGeneral.vue";

export default {
  name: "formularioView",
  components: {
    headerGeneral,
    Footer,
  },
  data: function () {
    return {
      info: {
        nombre: "",
        apellidos: "",
        telefono: "",
        correo: "",
      },
    };
  },
  methods: {
    recibirDatos(event) {
      this.info = event;
      //   this.nombre = nombre;
      //   this.apellidos = apellidos;
      //   this.telefono = telefono;
      //   this.correo = correo;
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
span {
  align-self: center;
  font-size: 5.8rem;
  margin-top: 2rem;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  padding: 2.3rem;
  width: 30rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.76);
  border: none;
  border-radius: 0.6rem;
  margin-bottom: 3rem;
}
button:hover {
  color: black;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
