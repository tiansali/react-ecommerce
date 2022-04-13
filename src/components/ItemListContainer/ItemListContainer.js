// import CounterPrototype from '../CounterPrototype/CounterPrototype'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getCategory, getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(list => setProducts(list))
    }, [categoryId])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer