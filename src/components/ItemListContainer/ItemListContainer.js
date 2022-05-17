import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    let componentIsActive = true

    useEffect(() => {
        getProducts(categoryId)
            .then(productsList => {
                if(componentIsActive) {
                    setProducts(productsList)
                }
            }).catch(error => {
                console.log(error)
            })
        
        return () => {
            componentIsActive = false
        }
    }, [categoryId])

    return(
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer