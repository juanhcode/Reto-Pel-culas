const detalle = document.createElement('div');
const titulo =document.getElementById('titulo');
const Campoimagen = document.querySelector('.img-responsive');
const contenido = document.querySelector('.contenido')
document.addEventListener("DOMContentLoaded",()=>{
    const movie =  JSON.parse(localStorage.getItem('pelicula'));
    movie.forEach((movie)=>{
        const {name,sipnosis,imagen} = movie
        titulo.textContent = name;
        Campoimagen.setAttribute('src',imagen);
        contenido.textContent = sipnosis;
    })

})