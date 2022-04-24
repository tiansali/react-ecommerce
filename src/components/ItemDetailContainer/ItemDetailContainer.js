import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
// import { getItem } from '../../asyncmock'
import { getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        // getItem(productId).then(prod => setProduct(prod))
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            // console.log(response.data())
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer