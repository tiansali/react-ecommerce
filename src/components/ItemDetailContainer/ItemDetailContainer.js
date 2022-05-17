import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../services/firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getItem(productId)
            .then(item => {
                setProduct(item)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer