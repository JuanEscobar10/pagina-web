const card = ({ imagen, titulo, precio, antiguo, descuento}) => {

    return(
        <div className="contenedor-card">
            <img src={imagen} alt="imagen" />
            <h3>{titulo}</h3>
            <p>${precio}</p>
            <p className="antiguo">${antiguo}</p>
            <span>{descuento}% OFF</span>
        </div>
    )
}

export default card;