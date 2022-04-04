import './ItemListContainer.css'
import CounterPrototype from '../CounterPrototype/CounterPrototype'

const ItemListContainer = (props) => {
    return(
        <div>
            <h2 className='ItemListContainer_placeholder'>{props.greeting}</h2>
            <CounterPrototype stock={5} initial={0} onAdd={1}/>
        </div>
    )
}

export default ItemListContainer