// import CounterPrototype from '../CounterPrototype/CounterPrototype'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
        // .then(() => {console.log(products)})
    }, [])

    return(
        <div>
            <h2 className='ItemListContainer_placeholder'>{props.greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer