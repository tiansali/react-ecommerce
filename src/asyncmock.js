const products = [
    {
        id: 1,
        name: 'Gran Tableta Leche rellena de MamuschCream con Avellanas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_001ff7d5ff34a00f8c104bebb493d9b8.jpg'
    },
    {
        id: 2,
        name: 'Tableta 70% Cacao con Almendras Activadas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_ff32d954e2e6498c64e4bb1855447a13.jpg'
    },
    {
        id: 3,
        name: 'Tableta 70% Cacao',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_acca350deca4e677288abe825a493322.jpg'
    },
    {
        id: 4,
        name: 'Alfajores de Harina de Almendras con baño mixto',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_2f79f5b76fae50fdc848b53b90e2be27.jpg'
    },
    {
        id: 5,
        name: 'Ositos en Caja Tableta Leche rellena de MamuschCream con Avellanas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_9cb6b4fe70cda41e5538d80695c4f9a5.jpg'
    },
    {
        id: 6,
        name: 'Tableta 70% Cacao con Frutos Secos',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_717636bf7aacd84822e81d8ce5e581e7.jpg'
    },
    {
        id: 7,
        name: 'Tableta 85% Cacao con Almendras enteras y tostadas',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_4837e61376d717b2416ea17fa686cb77.jpg'
    },
    {
        id: 8,
        name: 'Lata 5 Corazones',
        img: 'https://mamuschka-choco.animusargentina.com/uploads/big_c68e8a7d9ef69d662705885371cc3801.jpg'
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}