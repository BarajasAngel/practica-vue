<template>
  <article class="container-principal">
    <section class="container-seleccion">
      <h2>Sabores</h2>
      <div class="container-options">
        <div
          class="check-group"
          v-for="show in $store.state.tasteCake"
          :key="show.id"
        >
          <input
            type="checkbox"
            :name="show.name"
            :id="show.name"
            :value="show.name"
          />
          <label :for="show.name">{{ show.name }}</label>
        </div>
      </div>
    </section>
  </article>
</template>
<style scoped>
.container-principal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-seleccion {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
}
.container-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  font-size: 1.6rem;
}
input {
  margin-left: 0.7rem;
  width: 2rem;
  height: auto;
}
h2 {
  font-size: 1.9rem;
  justify-self: flex-start;
  margin-bottom: 2rem;
}
</style>
