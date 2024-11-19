document.addEventListener("DOMContentLoaded", function() {
    cargarNoticias();
});

function cargarNoticias() {
    fetch('js/noticias.json')
    .then(response => response.json())
    .then(data => {
        const contenedorNoticias = document.getElementById('news-container');
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('article');
            noticiaDiv.classList.add('news');
            noticiaDiv.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p><small>${noticia.fecha}</small></p>
                <p>${noticia.descripcion}</p>
                <img src="${noticia.img}" alt="${noticia.titulo}" title="${noticia.titulo}">
            `;
            contenedorNoticias.appendChild(noticiaDiv);
        });
    })
    .catch(error => console.error(error));
}