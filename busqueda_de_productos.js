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
//-----------------------------------------//
//--|funcionalidad_busqueda_de_productos|--//
//-----------------------------------------//
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query')?.toLowerCase().trim();
    const categoriasPorTipo = {
        hombre: ['Formal', 'Deportivo', 'Casual', 'Oficina'],
        mujer: ['Moda', 'Casual', 'Elegante'],
        niño: ['Escolar', 'Deportivo', 'Diario', 'Juegos'],
        niña: ['Fiesta', 'Casual', 'Escolar', 'Princesa']
    };
    const productos = [
        //------------------------------//
        //--|categorias_de_pantalones|--//
        //------------------------------//
        {
            nombre: 'Pantalón jean hombre',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa']
        },
        {
            nombre: 'Pantalón jean hombre',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa'],
            fecha: '2025-07-14',
            descuento: true,
            tallas: ['s', 'm', 'l', 'xl'] // ← nueva propiedad
        },
        {
            nombre: 'Pantalón deportivo niño',
            tipos: ['niño'],
            imagen: 'pantalon_deportivo_niño.png',
            precio: '$95.000',
            etiquetas: ['pantalon', 'pantalones', 'deportivo']
        },
        {
            nombre: 'Pantalón leggings niña',
            tipos: ['niña'],
            imagen: 'pantalon_leggings_niña.png',
            precio: '$85.000',
            etiquetas: ['pantalon', 'pantalones', 'leggings']
        },
        {
            nombre: 'Pantalón hombre',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa'],
            fecha: '2025-07-14',          
            descuento: true               
        },
        {
            nombre: 'jean de mujeres',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa'],
            fecha: '2025-07-14',          
            descuento: true,
            tallas: ['s', 'm', 'l', 'xl'] // ← nueva propiedad          
        },
        {
            nombre: 'Pantalón de niños',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa'],
            fecha: '2025-07-14',          
            descuento: true,
            tallas: ['s', 'm', 'l', 'xl'] // ← nueva propiedad               
        },
        {
            nombre: 'Pantalón',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa'],
            fecha: '2025-07-14',          
            descuento: true,
            tallas: ['s', 'm', 'l', 'xl'] // ← nueva propiedad               
        },
        {
            nombre: 'Pantalón jean hombre',
            tipos: ['hombre'],
            imagen: 'pantalon_jean_hombre.png',
            precio: '$120.000',
            etiquetas: ['pantalon', 'pantalones', 'jean', 'ropa']
        },
        {
            nombre: 'Pantalón formal mujer',
            tipos: ['mujer'],
            imagen: 'pantalon_formal_mujer.png',
            precio: '$135.000',
            etiquetas: ['pantalon', 'pantalones', 'ropa']
        },
        {
            nombre: 'Pantalón deportivo niño',
            tipos: ['niño'],
            imagen: 'pantalon_deportivo_niño.png',
            precio: '$95.000',
            etiquetas: ['pantalon', 'pantalones', 'deportivo']
        },
        {
            nombre: 'Pantalón leggings niña',
            tipos: ['niña'],
            imagen: 'pantalon_leggings_niña.png',
            precio: '$85.000',
            etiquetas: ['pantalon', 'pantalones', 'leggings']
        },
        //----------------------------//
        //--|categorias_de_vestidos|--//
        //----------------------------//
        {
            nombre: 'Vestido elegante mujer',
            tipos: ['mujer'],
            imagen: 'vestido_elegante_mujer.png',
            precio: '$150.000',
            etiquetas: ['vestido', 'vestidos', 'ropa', 'elegante']
        },
        {
            nombre: 'Vestido fiesta niña',
            tipos: ['niña'],
            imagen: 'vestido_fiesta_niña.png',
            precio: '$110.000',
            etiquetas: ['vestido', 'vestidos', 'niña', 'ropa']
        },
        //----------------------------//
        //--|categorias_de_Suéteres|--//
        //----------------------------//
        {
            nombre: 'Suéter lana hombre',
            tipos: ['hombre'],
            imagen: 'sueter_lana_hombre.png',
            precio: '$98.000',
            etiquetas: ['sueter', 'lana', 'ropa']
        },
        {
            nombre: 'Suéter estampado mujer',
            tipos: ['mujer'],
            imagen: 'sueter_estampado_mujer.png',
            precio: '$102.000',
            etiquetas: ['sueter', 'ropa']
        },
        {
            nombre: 'Suéter navideño niño',
            tipos: ['niño'],
            imagen: 'sueter_navideño_niño.png',
            precio: '$88.000',
            etiquetas: ['sueter', 'navidad', 'ropa']
        },
        {
            nombre: 'Suéter unicornio niña',
            tipos: ['niña'],
            imagen: 'sueter_unicornio_niña.png',
            precio: '$90.000',
            etiquetas: ['sueter', 'niña', 'ropa']
        }
    ];
    const contenedor = document.getElementById('contenedor-productos');
    const obtenerTipoAleatorio = (tipos) => {
        return tipos[Math.floor(Math.random() * tipos.length)];
    };
    const obtenerCategoriaAleatoria = (tipo) => {
        const categorias = categoriasPorTipo[tipo];
        return categorias ? categorias[Math.floor(Math.random() * categorias.length)] : 'General';
    };
    const resultados = productos.filter(producto =>
        producto.etiquetas.some(etiqueta => query.includes(etiqueta))
    );
    if (resultados.length > 0) {
        resultados.forEach(producto => {
            const tipo = obtenerTipoAleatorio(producto.tipos);
            const categoria = obtenerCategoriaAleatoria(tipo);
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <div class="producto-header">
                    Masomy - ${tipo}
                    <div>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="producto-body">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="producto-footer">
                    ${producto.nombre}<br>${producto.precio}<br>
                    <span class="categoria">${categoria}</span>
                </div>
            `;
            div.setAttribute('data-fecha', producto.fecha || '2024-01-01');
            div.setAttribute('data-descuento', producto.descuento ? 'true' : 'false');
            div.setAttribute('data-talla', producto.tallas ? producto.tallas.join(',') : '');
            contenedor.appendChild(div);
        });
    } else {
        contenedor.innerHTML = `
            <p style="color: red; font-weight: bold;">
                El producto que buscas no ha sido encontrado aquí.
            </p>
        `;
    }
});
///-----------------------------//
//--|funcionalidad_de_filtro|--//
//-----------------------------//
document.querySelectorAll('input[name="filtro"], input[name="categoria"], input[name="talla"], input[name="estilo"]').forEach(filtro => {
    filtro.addEventListener('change', aplicarFiltros);
});
function aplicarFiltros() {
    const filtrosSeleccionados = [...document.querySelectorAll('input[name="filtro"]:checked')].map(cb => cb.value);
    const categoriasSeleccionadas = [...document.querySelectorAll('input[name="categoria"]:checked')].map(cb => cb.value.toLowerCase());
    const tallasSeleccionadas = [...document.querySelectorAll('input[name="talla"]:checked')].map(cb => cb.value.toLowerCase());
    const estilosSeleccionados = [...document.querySelectorAll('input[name="estilo"]:checked')].map(cb => cb.value.toLowerCase());
    let productos = [...document.querySelectorAll('.producto')].map(card => {
        const tipoTexto = card.querySelector('.producto-header').textContent.toLowerCase();
        const tipo = tipoTexto.includes('masomy - ') 
            ? tipoTexto.replace('masomy - ', '').trim()
            : '';
        const tallas = (card.dataset.talla || '').toLowerCase().split(',');
        return {
            elemento: card,
            nombre: card.querySelector('.producto-footer').childNodes[0].textContent.trim(),
            precio: extraerPrecio(card.querySelector('.producto-footer').childNodes[2].textContent),
            fecha: card.dataset.fecha || '2024-01-01',
            descuento: card.dataset.descuento === "true",
            tipo: tipo,
            tallas: tallas
        };
    });
    let productosSeleccionados = [];
    let productosNoSeleccionados = [];
    productos.forEach(p => {
        const coincideCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(p.tipo);
        const coincideTalla = tallasSeleccionadas.length === 0 || p.tallas.some(t => tallasSeleccionadas.includes(t));
        const coincideEstilo = estilosSeleccionados.length === 0 || estilosSeleccionados.includes(p.tipo);
        if (coincideCategoria && coincideTalla && coincideEstilo) {
            productosSeleccionados.push(p);
        } else {
            productosNoSeleccionados.push(p);
        }
    });
    if (filtrosSeleccionados.includes('precio_alto')) {
        productosSeleccionados.sort((a, b) => b.precio - a.precio);
    }
    if (filtrosSeleccionados.includes('precio_bajo')) {
        productosSeleccionados.sort((a, b) => a.precio - b.precio);
    }
    if (filtrosSeleccionados.includes('mas_vendidos')) {
        productosSeleccionados.sort(() => Math.random() - 0.5);
    }
    if (filtrosSeleccionados.includes('ordenados_por_a_z')) {
        productosSeleccionados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    if (filtrosSeleccionados.includes('mas_recientes')) {
        productosSeleccionados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }
    if (filtrosSeleccionados.includes('descuento')) {
        const conDescuento = productosSeleccionados.filter(p => p.descuento);
        const sinDescuento = productosSeleccionados.filter(p => !p.descuento);
        productosSeleccionados = [...conDescuento, ...sinDescuento];
    }
    productosNoSeleccionados.sort(() => Math.random() - 0.5);
    const resultadoFinal = [...productosSeleccionados, ...productosNoSeleccionados];
    const estilo = estilosSeleccionados[0] || ''; // 'vertical' o 'horizontal'
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';
    resultadoFinal.forEach(p => {
        p.elemento.classList.remove('vertical', 'horizontal');
        if (estilo) {
            p.elemento.classList.add(estilo);
        }
        contenedor.appendChild(p.elemento);
    });
}
function extraerPrecio(precioTexto) {
    return parseInt(precioTexto.replace(/\D/g, '')) || 0;
}