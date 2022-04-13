import { Link, useNavigate } from 'react-router-dom'

const ItemDetail = props => {
    const prod = props.product
    const navigate = useNavigate()

    if (props.product.name) {
        return(
            <div className="ItemDetail">
                <div className="ItemDetail_imgContainer">
                    <img src={prod.img}/>
                </div>
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
                <div className="ItemDetail_footerContainer">
                    <span>${prod.price}</span>
                    <span onClick={() => navigate(-1)} className="ItemDetail_button">CONTINUAR</span>
                </div>
            </div>
        )
    } else {
        return(
            <h5>esperando respuesta</h5>
        )
    }
}

export default ItemDetail