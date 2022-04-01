<template>
  <footer>
    <div class="footer">
      <img src="@/assets/logo.png" width="175px" alt="Logo" />
      <ul class="list-footer">
        <li>Escríbenos</li>
        <li>me@correo.com</li>
        <li>Llamanos</li>
        <li>55-552-5232</li>
      </ul>
      <ul class="list-footer">
        <li>Síguenos</li>
        <li>
          <img src="@/assets/instagram.png" alt="instagram" class="icono-footer" />
        </li>        
      </ul>
      <ul class="list-footer">
        <li>Horario</li>
        <li>Lunes - Sábado</li>
        <li>8:00 a 22:00</li>
        <li>Domingo</li>
        <li>10:00 a 20:00</li>
      </ul>
      <span class="maps"></span>
    </div>
    <span class="coppy">
      CopyRight© 2022 página hecha por
      <a href="https://github.com/BarajasAngel">Luis Angel</a>
    </span>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #00000090;
  color: white;
  font-size: 1.6rem;
}
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.icono-footer {
  width: 4rem;
  height: auto;
  cursor: pointer;
  margin-top: 5rem;
}
ul.list-footer > li {
  list-style: none;
  line-height: 3rem;
}
.maps {
  background-image: url("@/assets/mapa.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  height: auto;
  padding: 7rem 0rem;
}
.coppy {
  align-self: center;
  margin: 2rem;
  padding: 2rem;
}
span > a {
  color: #fcd7ba;
  text-decoration: none;
  overflow: hidden;
}
</style>
