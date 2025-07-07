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
