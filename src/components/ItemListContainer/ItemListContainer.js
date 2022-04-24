// import CounterPrototype from '../CounterPrototype/CounterPrototype'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { getCategory, getProducts } from '../../asyncmock'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        // getProducts(categoryId).then(list => setProducts(list))
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('categories', 'array-contains', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [categoryId])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer