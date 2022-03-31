export const showMovie = (array, container) =>{
    array.forEach((movie) => {
        const {imagen,name,id} = movie;
        container.innerHTML +=
        `
        <div class="card-movie">
                <p>${name}</p>
                <img src="${imagen}" alt="" id="${id}" class="img-movie">
        </div>
        `;
    })
}