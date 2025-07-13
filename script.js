//--------------------------------------//
//--|funcionalidad_menu_de_navegacion|--//
//--------------------------------------//
function toggleMenu() {
    const navSection = document.querySelector('.nav-section');
    navSection.classList.toggle('active');
}
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
//----------------------------//
//--|funcionalidad_carrusel|--//
//----------------------------//
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;
function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}
prevBtn.addEventListener('click', () => {
    const index = (currentIndex - 1 + items.length) % items.length;
    showSlide(index);
});
nextBtn.addEventListener('click', () => {
    const index = (currentIndex + 1) % items.length;
    showSlide(index);
});
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        showSlide(index);
    });
});
//----------------------------------------//
//--|funcionalidad_vistas_de_categorias|--//
//----------------------------------------//
function mostrarCategoria(categoriaSeleccionada) {
    const contenedores = document.querySelectorAll('.categoria-productos');
    contenedores.forEach(c => c.classList.add('hidden'));
    const contenedorVisible = document.getElementById(`productos-${categoriaSeleccionada}`);
    if (contenedorVisible) {
        contenedorVisible.classList.remove('hidden');
    }
}