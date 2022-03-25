<template>
    <article class="container-principal">
        <section class="container-inputs">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" required placeholder="Ingresa tu nombre(s) aquí">
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" required placeholder="Ingresa tus apellidos aquí">
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" name="telefono" required placeholder="Ingresa tu teléfono aquí">
            </div>
            <div class="form-group">
                <label for="correo">Correo Electrónico:</label>
                <input type="email" name="correo" required placeholder="Ingresa tu correo aquí" >
            </div>
        </section>
    </article>
</template>
<style scoped>
.container-principal{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;    
}
.container-inputs{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    font-size: 1.8rem;
    gap:4rem;
    width: 75%; 
}
.form-group{
    display: flex;
    flex-direction: column;        
}
label{
    margin: 1rem 0rem;
}
input{
    font-size: 1.8rem; 
    height: 4rem;
}
</style>