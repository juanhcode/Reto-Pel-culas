export const showImages =(contenedor,array)=>{
    for (let i = 0; i < array.length; i++) {
        contenedor.innerHTML += `
        <div class="itemCarrusel" id="itemCarrusel-${i+1}">
            <div class="tarjetaCarrusel" id="tarjetaCarrusel-1">
                    <div class="new-image">
                        <img src="${array[i].imagen}" alt="" class="imagen-responsive">
                    </div>
            </div>
                <div class="flechasCarrusel">
                <a href="#itemCarrusel-${i}">
                    <i class="izquierda"><img src="/assets/inversa.png" alt=""></i>
                </a>
                <a href="#itemCarrusel-${i+2}" class="destino">
                    <i class="derecha"><img src="/assets/flecha.png" alt=""></i>
                </a>
        </div>
        `
    }
}