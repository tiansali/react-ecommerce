import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import CartContext from '../../CartContext/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemDetail = props => {
    const prod = props.product
    const navigate = useNavigate()
    const [itemCount, setItemCount] = useState(0)

    const { addItem, getItemQuantity } = useContext(CartContext)

    const handleCounter = (count) => {
        setItemCount(count)
        addItem({...prod, quantity: count})
    }

    if (prod.name) {
        return(
            <div className="ItemDetail">
                <div className="ItemDetail_imgContainer">
                    <img src={prod.img}/>
                </div>
                <div className="ItemDetail_header">
                    <h3>{prod.name}</h3>
                    <span>${prod.price}</span>
                </div>
                <p>{prod.description}</p>
                <div className="ItemDetail_footerContainer">
                    <ItemCounter initial={getItemQuantity(prod.id)} stock={10} onAdd={handleCounter}/>
                    <span onClick={() => navigate(-1)} className="ItemDetail_button">CONTINUAR</span>
                </div>
            </div>
        )
    } else {
        return(
            <h5>esperando respuesta</h5>
        )
    }
}

export default ItemDetail