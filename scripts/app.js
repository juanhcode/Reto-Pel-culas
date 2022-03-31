import { movies } from "../data/peliculas.js";
import { showImages } from "../modules/showImage.js";
import { showMovie } from "../modules/showMovie.js";
const contenedorPelicula = document.querySelector('.peliculas');
const destino = document.querySelector('.destino');
const contendorItems = document.getElementById('conteItemsCarrusel');
document.addEventListener('DOMContentLoaded',()=>{
    showMovie(movies,contenedorPelicula);
    showImages(contendorItems,movies);
    console.log(contendorItems);
})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('card-movie') || e.target.classList.contains('img-movie')){
        const peliculaEncontrada = movies.filter((movie)=> movie.id == e.target.id);
        localStorage.setItem('pelicula',JSON.stringify(peliculaEncontrada));
        window.location.href = '/pages/detalle.html';
    }
    /*
    if(e.target.classList.contains('derecha')){

    }*/
    
})