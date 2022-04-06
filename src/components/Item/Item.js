const Item = (prod) => {
    return(
        <li className="Item">
            <div>
                <img src={prod.img}/>
                <h3>{prod.name}</h3>
            </div>
            <button>Ver detalle</button>
        </li>     
    )
}

export default Item