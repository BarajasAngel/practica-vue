<template>
    <section class="container-login">
        <div class="container-inputs">
            <img src="@/assets/pastelero.png" alt="icono usuario">
            <label for="">Usuario:</label>
            <input type="text" placeholder="Ingresa tu usuario aquí">
            <label for="">Contraseña:</label>
            <input type="password" placeholder="Ingresa tu contraseña aquí">
            <a href="/">Click aquí si no eres el pastelero</a>
            <a class="button" href="#/pastelero" role="button">Iniciar Sesión</a>
        </div>
    </section>
</template>
<style scoped>
section.container-login{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container-inputs{        
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 5rem 8rem;
    border-radius: 01.6rem;
    -webkit-box-shadow: 10px 10px 26px 14px rgba(0,0,0,0.3);
    -moz-box-shadow: 10px 10px 26px 14px rgba(0,0,0,0.3);
    box-shadow: 10px 10px 26px 14px rgba(0,0,0,0.3);    
}
label{
    margin: 1rem 0rem;
}
input{
    height: 3rem;
}
.button{
    padding: 2rem 4rem;
    border-radius: 0.6rem;
    background-color: #FFF1E6;
    cursor:pointer;
    text-decoration: none;
    color: black;
}
.button:hover{
    color: #FFF1E6;
    background-color: black;
}
label, input, button{
    font-size: 1.6rem;
}
img{
    align-self: center;
    width: 10rem;
    height: auto;
    margin-bottom: 2rem;
}
a{    
    font-size: 1.2rem;
    place-self: center;
    margin: 2rem 0rem;    
}
</style>