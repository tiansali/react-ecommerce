import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getItem(productId).then(prod => setProduct(prod))
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer