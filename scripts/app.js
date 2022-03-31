import { movies } from "../data/peliculas.js";
import { showMovie } from "../modules/showMovie.js";
const contenedorPelicula = document.querySelector('.peliculas');
document.addEventListener('DOMContentLoaded',()=>{
    showMovie(movies,contenedorPelicula);
})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('card-movie') || e.target.classList.contains('img-movie')){
        const peliculaEncontrada = movies.filter((movie)=> movie.id == e.target.id);
        localStorage.setItem('pelicula',JSON.stringify(peliculaEncontrada));
        window.location.href = '/pages/detalle.html';
    }
})