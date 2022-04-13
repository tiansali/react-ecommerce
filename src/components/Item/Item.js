import { Link } from 'react-router-dom'

const Item = (prod) => {
    return(
        <li className="Item">
            <div>
                <img src={prod.img}/>
                <h3>{prod.name}</h3>
            </div>
            <Link className='button' to={`/item/${prod.id}`}>Ver detalle</Link>
        </li>     
    )
}

export default Item