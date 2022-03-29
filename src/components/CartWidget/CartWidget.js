import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='CartWidget_container'>
            <img className='CartWidget_img' src='./images/cart.svg' alt='Cart'/>
            <span className='CartWidget_counter'>3</span>
        </div>
    )
}

export default CartWidget