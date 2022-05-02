import './Cart.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../CartContext/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, getTotalPrice, removeItem, addItem, clearCart } = useContext(CartContext)

    
    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            items: cart,
            buyer: {
                name: 'John Doe',
                phone: '0800666000',
                email: 'johndoe@gmail.com'
            },
            total: getTotalPrice(),
            date: new Date()
        }
        
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                // Chequea que todos los productos tengan stock
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id).quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                // Agrega la orden de compra a la base de datos
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }
            }).then(({id}) => {
                // Actualiza el stock de todos los productos en la orden de compra
                batch.commit()
                console.log(`El id de la orden es: ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if (cart.length === 0) {
        return(
            <div className='cartMessageContainer'>
                <h2>El carrito esta vacio</h2>
                <Link to='/'>Vuelve al inicio</Link>
            </div>
        )
    }

    return(
        <ul className='Cart'>
            {cart.map(prod => {
                return(
                    <li key={prod.id}>
                        <div className='leftColumn'>
                            <button className='delete' onClick={() => removeItem(prod.id)}>x</button>
                            {prod.quantity}x {prod.name}
                        </div>
                        <div className='priceColumn'>
                            <span className='unitary'>${prod.price}/u.</span>
                            <span className='subtotal'>${prod.price*prod.quantity}</span>
                        </div>
                    </li>
                )
            })}
            <li className='totalContainer'>
                <span className='totalTitle'>Total</span>
                <span className='totalPrice'>${getTotalPrice()}</span>
            </li>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <button onClick={() => createOrder()}>Generar orden de compra</button>
        </ul>
    )
}

export default Cart