<template>  
  <router-view />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');


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
  list-style: none;
}
li > a {
  text-decoration: none;
  color: white;  
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
  /* background-color: #fff1e6; */
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='10' height='10' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 241, 230,1)'/%3E%3Ccircle cx='20' cy='20' r='7' fill='rgba(255, 241, 230,1)'/%3E%3Ccircle cx='20' cy='20' r='5' fill='rgba(204, 191, 163,1)'/%3E%3Ccircle cx='-20' cy='20' r='5' fill='rgba(204, 191, 163,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
}
</style>
