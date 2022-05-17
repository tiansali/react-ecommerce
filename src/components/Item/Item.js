import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'

const Item = (prod) => {
    const { getItemQuantity } = useContext(CartContext)
    const itemQuantityInCart = getItemQuantity(prod.id)
    
    const shortenDescription = (fullDescription, newLenght) => {
        const newDescription = fullDescription.slice(0, newLenght)
        return `${newDescription}...`
    }

    return(
        <li className="ItemList__Item">
            <div>
                <img className='ItemList__Item__img' src={prod.img}/>
                {itemQuantityInCart > 0
                    ? <span className='ItemList__Item__inCart'>{itemQuantityInCart} en carrito.</span>
                    : null
                }
                <h3 className='ItemList__Item__title'>{prod.name}</h3>
                <p className='ItemList__Item__description'>{shortenDescription(prod.description, 60)}</p>
            </div>
            <Link className='ItemList__Item__btn' to={`/item/${prod.id}`}>Ver detalle</Link>
        </li>     
    )
}

export default Item