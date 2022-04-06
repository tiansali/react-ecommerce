import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <ul className='ItemList'>
            {products.map(prod => {
                return(
                    <Item key={prod.id} {...prod} />
                )
            })}
        </ul>
    )
}

export default ItemList