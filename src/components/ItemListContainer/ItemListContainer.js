import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    let isActive = true

    useEffect(() => {
        getProducts(categoryId)
            .then(productsList => {
                if(isActive) {
                    setProducts(productsList)
                }
            }).catch(error => {
                console.log(error)
            })
        
        return () => {
            isActive = false
        }
    }, [categoryId])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer