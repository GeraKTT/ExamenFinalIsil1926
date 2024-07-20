const temaOscuro = () => {
        document.querySelector("body").setAttribute("data-bs-theme", "dark");
        document.querySelector("#di-icon").setAttribute("class", "fa-solid fa-sun");
}

const temaClaro = () => {
        document.querySelector("body").setAttribute("data-bs-theme", "ligth");
        document.querySelector("#di-icon").setAttribute("class", "fa-solid fa-moon");
}

const cambiarTema = () => {
        document.querySelector("body").getAttribute("data-bs-theme") ==="ligth"?
        temaOscuro() : temaClaro();
}

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');          
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
        header.classList.toggle('shadow', window.scrollY > 0);
});




$('.btn-primary').click(function () {
        Swal.fire({
                title: "Ups...",
                text: "No se encontro esta página",
                imageUrl: "/img/alert.jpg",
                padding: "3em",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "alert",
                background: "#EFBC9B",
              });
});