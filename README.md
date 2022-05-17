# React E-Commerce Mamuschka

**Single Page Application creada con Create React App para Web, integrada a Firebase/Firestore**, como ejercicio de aprendizaje para el curso de React.js de CoderHouse [https://www.coderhouse.com]

Me inspiré en la fábirca de chocolates Mamuschka [https://comprar.mamuschka.store/], tanto para la ideantidad visual como para los productos en venta.


## Descripcion

Se trata de de una tienda virtual que toma un listado de productos y los muestra como una lista de tarjetas, con la posibilidad de filtrarlos por categoria.
Cada tarjeta permite acceder a una vista detalle del producto, donde se muestran la imagen y descripcion ampliadas, y nos da la posibilidad de agregar (o quitar) unidades del producto al carrito.
El carrito almacena todos los productos y sus cantidades, y ofrece la posibilidad de eliminar productos del mismo, o vaciarlo por completo.
A su vez, hay una seccion de usuario (sin autenticacion ni persistencia) donde se guarda la informacion del mismo para se adjuntada a la orden de compra.
Solo se podra enviar la orden de compra una vez que haya elementos en el carrito y el usuario tenga, al menos, un primer nombre.
Por ultimo, se envia la orden de compra a Firestore y se muestra toda la informacion de la misma en una pagina de checkout.

![GIF de demostracion](https://github.com/tiansali/react-ecommerce/blob/master/react-ecommerce-demo.gif)


## Instalacion
Instalar Node.js
`npm install`

Instalar SASS
`npm i sass`

## Ejecucion
En la carpeta raiz, ejecutar `npm start`


## Estructura de datos
 Para la correcta implementacion de este codigo, los datos deberan tener la siguiente estructura:

#### Categorias
Las **categorias** del NavBar se pasan como un array de strings:
*Ej.*
`['tabletas', 'bombones', 'alfajores']`

#### Productos
Los **productos**, tanto para la vista en mosaico del ItemList como para el ItemDetail, se pasan como objeto (o array de objetos) con la siguiente estructura:

```
{
id: '42inNlDRTrM9daOJ9xKK',
name: 'Lata 7 ositos',
description: 'Lata 115mm de diámetro. Vienen con motivo de Invierno y Verano. Contiene 7 osos de chocolate, blancos y leche. Rellenos con dulce de leche Mamuschka.',
img: 'https://mamuschka-choco.animusargentina.com/uploads/big_78420254e896b4f7fb754b0b6a6e944d.jpg',
price: 1370,
stock: 996
}
```

En la implementacion actual, el ID se genera automaticamente al momento de crear el objeto en Firestore.
Los campos `price` y `stock` son integers, los campos `name` y `description` son strings para ser consumidos por el usuario, y el campo `img` es una ruta directa, hosteada por un tercero, extraida de [https://comprar.mamuschka.store/].

#### Usuario
Para el almacenamiento de los datos de usuario, se implementa la siguiente estructura:

```
{
    firstName: 'Homero'
    lastName: 'Simpson'
    email: 'homerosimpson@gmail.com'
    adress: 'Avenida Siempreviva 123'
}
```