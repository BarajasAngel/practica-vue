<template>
  <header class="container-header">    
    <img src="./assets/Logo.png" alt="Logo" />
    <ul class="container-navegacion">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/productos">Productos</router-link></li>
      <li><router-link to="/sucursales">Sucursales</router-link></li>
    </ul>
  </header>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@600;700&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
}
html {
  font-size: 62.5%;
}

.container-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #00000090;
  padding: 1.6rem 0px;
  font-size: 1.6rem;
  position: relative;
  z-index: 1;
  color: white;
}
header>img{
  width:175px;
}
.container-navegacion {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

ul.container-navegacion > li {
  padding: 2rem;
  margin: 0rem 1rem;
  list-style: none;
}
li > a {
  text-decoration: none;
  color: white;
  padding: 0.7rem;
}
ul.container-navegacion > li > a:hover {
  background-color: #c09cfaa9;
  border-radius: 6px;
  padding: 1.2rem;
  color: black;
  border: none;
  transition: padding 0.2s;
}
body {
  background-color: #fff1e6;
}
</style>
