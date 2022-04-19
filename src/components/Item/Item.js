import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'

const Item = (prod) => {
    const { getItemQuantity } = useContext(CartContext)

    return(
        <li className="Item">
            <div>
                <img src={prod.img}/>
                <h3>{prod.name}</h3>
                {getItemQuantity(prod.id) > 0 ? <span>{getItemQuantity(prod.id)} en carrito.</span> : null}
            </div>
            <Link className='button' to={`/item/${prod.id}`}>Ver detalle</Link>
        </li>     
    )
}

export default Item