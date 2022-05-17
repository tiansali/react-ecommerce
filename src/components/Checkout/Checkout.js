import './Checkout.scss'
import Cart from '../Cart/Cart'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOrder } from '../../services/firebase/firestore'

const Checkout = () => {
    const orderId = useParams().orderId
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState({})

    
    useEffect(() => {
        getOrder(orderId)
        .then(response => {
            setOrder(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [orderId])
    
    if (loading) {
        return(<h3>Se esta cargando su compra</h3>)
    }

    return(
        <div className='Checkout'>
            <h2 className='Checkout__title'>¡COMPRA REALIZADA CON ÉXITO!</h2>
            <span className='Checkout__id'>El codigo de su orden es 
                <b className='Checkout__id--number'> {order.id}</b>
            </span>
            <div className='Checkout__buyer'>
                <h3 className='Checkout__buyer__title'>Detalles del comprador</h3>
                <span className='Checkout__buyer__tag'>Nombre</span>
                <span className='Checkout__buyer__field'>{order.buyer.firstName} {order.buyer.lastName}</span>
                <span className='Checkout__buyer__tag'>E-mail</span>
                <span className='Checkout__buyer__field'>{order.buyer.email}</span>
                <span className='Checkout__buyer__tag'>Direccion</span>
                <span className='Checkout__buyer__field'>{order.buyer.adress}</span>
            </div>
            <div className='Checkout__items'>
                <h3 className='Checkout__items__title'>Detalles de la compra</h3>
                <Cart cart={order.items} editable={false}/>
                <Link to='/' className='Checkout__cta'>Seguir comprando</Link>
            </div>
        </div>
    )
}

export default Checkout