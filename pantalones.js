//--------------------------------------//
//--|funcionalidad_menu_de_navegacion|--//
//--------------------------------------//
document.getElementById('barraBusqueda').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query !== '') {
            window.location.href = `busqueda_de_productos.html?query=${encodeURIComponent(query)}`;
        }
    }
});
//--------------------------//
//--|funcionalidad_filtro|--//
//--------------------------//
const contenedor = document.getElementById('contenedor-productos');
const productos_con_precios_altos = `
    <div class="categorias_de_precios_altos">
        <div class="producto_precio_alto1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$400.000
            </div>
        </div>
        <div class="producto_precio_alto2">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_precio_alto3">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$245.000
            </div>
        </div>
        <div class="producto_precio_alto4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_precio_alto5">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$137.990
            </div>
        </div>
        <div class="producto_precio_alto6">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_precio_alto7">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_precio_alto8">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$115.000
            </div>
        </div>
    </div>
`;
const productos_con_precios_bajos = `
    <div class="categorias_de_precios_bajos">
        <div class="producto_precio_bajo1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_precio_bajo2">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$85.500
            </div>
        </div>
        <div class="producto_precio_bajo3">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$78.100
            </div>
        </div>
        <div class="producto_precio_bajo4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$60.999
            </div>
        </div>
        <div class="producto_precio_bajo5">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_precio_bajo6">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_precio_bajo7">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_precio_bajo8">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_precio_bajo9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_precio_bajo10">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$39.999
            </div>
        </div>
        <div class="producto_precio_bajo11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_precio_bajo12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_precio_bajo13">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_precio_bajo14">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_precio_bajo15">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_precio_bajo16">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_mas_vendidos = `
    <div class="categorias_mas_vendidos">
        <div class="producto_mas_vendido1">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_mas_vendido2">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_mas_vendido3">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$78.100
            </div>
        </div>
        <div class="producto_mas_vendido4">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$115.000
            </div>
        </div>
        <div class="producto_mas_vendido5">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$60.999
            </div>
        </div>
        <div class="producto_precio_alto6">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xss | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_precio_alto7">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_precio_alto8">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_mas_recientes = `
    <div class="categorias_mas_recientes">
        <div class="producto_mas_reciente1">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_mas_reciente2">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_mas_reciente3">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_mas_reciente4">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_mas_reciente5">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_mas_reciente6">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_mas_reciente7">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_mas_reciente8">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
function aplicarFiltroOrdenPrecio() {
    const precioAlto = document.getElementById('orden-precio-alto').checked;
    const precioBajo = document.getElementById('orden-precio-bajo').checked;
    const masVendidos = document.querySelector('input[value="mas_vendidos"]').checked;
    const masRecientes = document.querySelector('input[value="mas_recientes"]').checked;
    if (precioAlto) {
        contenedor.innerHTML = productos_con_precios_altos;
    } else if (precioBajo) {
        contenedor.innerHTML = productos_con_precios_bajos;
    } else if (masVendidos) {
        contenedor.innerHTML = productos_mas_vendidos;
    } else if (masRecientes) {
        contenedor.innerHTML = productos_mas_recientes;
    } else {
        contenedor.innerHTML = '';
    }
}
document.getElementById('orden-precio-alto').addEventListener('change', aplicarFiltroOrdenPrecio);
document.getElementById('orden-precio-bajo').addEventListener('change', aplicarFiltroOrdenPrecio);
document.querySelector('input[value="mas_vendidos"]').addEventListener('change', aplicarFiltroOrdenPrecio);
document.querySelector('input[value="mas_recientes"]').addEventListener('change', aplicarFiltroOrdenPrecio);
//---------------------------------//
//--|funcionalidad_boton_ver_mas|--//
//---------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-productos');
    const btnVerMas = document.getElementById('btn-ver-mas');
    let clickCount = 0;
    btnVerMas.addEventListener('click', () => {
        clickCount++;
        const pasos = document.querySelectorAll('.paso');
        pasos.forEach(p => p.classList.remove('activo'));
        if (clickCount - 1 < pasos.length) {
            pasos[clickCount - 1].classList.add('activo');
        }
        if (clickCount === 1) {
            const productosExtra1 = `
                <div class="producto_contenedor2">
                    <div class="producto9">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$137.900
                        </div>
                    </div>
                    <div class="producto10">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$56.190
                        </div>
                    </div>
                    <div class="producto11">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$51.000
                        </div>
                    </div>
                    <div class="producto12">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$135.000
                        </div>
                    </div>
                    <div class="producto13">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$44.990
                        </div>
                    </div>
                    <div class="producto14">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$42.000
                        </div>
                    </div>
                    <div class="producto15">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$40.000
                        </div>
                    </div>
                    <div class="producto16">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$39.999
                        </div>
                    </div>      
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra1);
        } else if (clickCount === 2) {
            const productosExtra2 = `
                <div class="producto_contenedor3">
                    <div class="producto17">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$37.900
                        </div>
                    </div>
                    <div class="producto18">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$123.000
                        </div>
                    </div>
                    <div class="producto19">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$35.100
                        </div>
                    </div>
                    <div class="producto20">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$30.000
                        </div>
                    </div>
                    <div class="producto21">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$27.180
                        </div>
                    </div>
                    <div class="producto22">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$24.000
                        </div>
                    </div>
                    <div class="producto23">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$20.000
                        </div>
                    </div>
                    <div class="producto24">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$115.000
                        </div>
                    </div>   
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra2);
        } else {
            btnVerMas.textContent = "ver mas";
            btnVerMas.disabled = true;
            btnVerMas.style.backgroundColor = "#999";
            btnVerMas.style.cursor = "not-allowed";
        }
    });
});