import { movies } from "../data/peliculas";
import { showMovie } from "../modules/showMovie";
const contenedorPelicula = document.querySelector('peliculas');
document.addEventListener('DOMContentLoaded',()=>{
    console.log(movies);
    showMovie(movies,contenedorPelicula);
})