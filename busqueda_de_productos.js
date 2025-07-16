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