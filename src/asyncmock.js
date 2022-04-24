const products = [
    {
        id: '1',
        name: 'Gran Tableta Leche rellena de MamuschCream con Avellanas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_001ff7d5ff34a00f8c104bebb493d9b8.jpg',
        description: 'Chocolate de orígen Amazonía Ecuatoriano premiado por Academy of Chocolate Awards medalla de Bronce año 2017; rellleno de Mamuschcream que es una crema untable, elaborada por Mamuschka, con más de un 50% de avellanas. Incrustación de avellanas cubeteadas, tostadas. Peso neto 100 grs.',
        price: 665,
        stock: 25,
        categories: ['tabletas']
    },
    {
        id: '2',
        name: 'Tableta 70% Cacao con Almendras Activadas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_ff32d954e2e6498c64e4bb1855447a13.jpg',
        description: 'Chocolate 70% Cacao Origen Ecuador de los Ríos con almendras activadas, es decir que se encuentran hidratadas 12 hs a bajas temperaturas para no perder sus propiedades. Peso neto 75 grs.',
        price: 530,
        stock: 25,
        categories: ['tabletas']
    },
    {
        id: '3',
        name: 'Tableta 70% Cacao',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_acca350deca4e677288abe825a493322.jpg',
        description: 'Chocolate 70% Cacao, orígen Peru. Cooperativa de mujeres Qori warmi, denominación de Origen controlada. Elaborado desde el grano, proceso "Bean to Bar". Libre de Tacc, sin leche, Apto celíacos, Apto veganos. Peso neto 50 grs.',
        price: 550,
        stock: 25,
        categories: ['tabletas']
    },
    {
        id: '4',
        name: 'Alfajores de Harina de Almendras con baño mixto',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_2f79f5b76fae50fdc848b53b90e2be27.jpg',
        description: 'Caja 6 alfajores dulce de leche con baño mixto: Chocolate con leche y chocolate Semiamargo 63% / El alfajor más rico y sano. Elaborado a partir de almendras enteras con baño de nuestro chocolate con leche Bean to Bar.',
        price: 930,
        stock: 25,
        categories: ['alfajores']
    },
    {
        id: '5',
        name: 'Ositos en Caja Tableta Leche rellena de MamuschCream con Avellanas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_9cb6b4fe70cda41e5538d80695c4f9a5.jpg',
        description: 'Bombones con forma de ositos, de chocolate con leche rellenos de Dulce de leche, y de chocolate blanco rellenos con crema de avellanas Mamuschcream, 108 gr Chocolate Bean to Bar, sin TACC. Producto Apto celiacos. Nuevo envase tipo estuche de cartón, evitando el uso del plástico y pensado para más de un uso (caja, para guardar cosas, cartuchera para el cole, etc.)',
        price: 680,
        stock: 25,
        categories: ['bombones']
    },
    {
        id: '6',
        name: 'Tableta 70% Cacao con Frutos Secos',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_717636bf7aacd84822e81d8ce5e581e7.jpg',
        description: 'Chocolate 70% Cacao Origen Amazonía Ecuatoriana, Proceso "Bean to Bar". Con frutos secos seleccionados por Mamuschka. Incrustaciones de avellanas cubeteadas, almendras tostadas, pistachos tostados, arándanos. Sin TACC. Apto Celíacos. Peso neto 75 grs.',
        price: 650,
        stock: 25,
        categories: ['tabletas']
    },
    {
        id: '7',
        name: 'Tableta 85% Cacao con Almendras enteras y tostadas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_4837e61376d717b2416ea17fa686cb77.jpg',
        description: 'Chocolate 85% Cacao de origen Amazonía Ecuatoriana, Proceso "Bean to Bar", con almendras enteras seleccionadas tostadas por Mamuschka. Sin TACC. Apto celíacos. En ausencia de derivados de origen animal esta tableta es apta para veganos. Peso neto 75 grs.',
        price: 580,
        stock: 25,
        categories: ['tabletas']
    },
    {
        id: '8',
        name: 'Lata 5 Corazones',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_c68e8a7d9ef69d662705885371cc3801.jpg',
        description: 'Lata 5 Corazones, tapas con distintos motivos, coleccionables. Contiene corazones de leche y blanco, rellenos con dulce de leche Mamuschka. Todos nuestros chocolates con leche, semi amargos y amargos son elaborados a partir de granos de cacao de origen en nuestra fábrica de Bariloche y son Sin Tacc.',
        price: 820,
        stock: 25,
        categories: ['bombones']
    }
]

const categories = [
    {id: 'tabletas', description: 'Tabletas'},
    {id: 'bombones', description: 'Bombones'},
    {id: 'alfajores', description: 'Alfajores'}
]

export const getProducts = categoryId => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(
                categoryId
                ? products.filter(product => product.categories.includes(categoryId))
                : products)
        }, 500)
    })
}

export const getItem = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(item => item.id === id))
        }, 500)
    })
}

export const getCategories = () => {return new Promise(resolve => resolve(categories))}