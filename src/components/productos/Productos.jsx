import '../Home/Home.css';
export const Producto = (props) => {
    console.log(props)
    return (
        <div className='producto-venta'>
            <img className='producto-img' src={props.producto.imageUrl} alt={props.producto.nombre} />
            <h3>{props.producto.titulo}</h3>            
            <p>{props.producto.descripcion}</p>
            <p className='precio'>${props.producto.precio}</p>
            <button className="añadir-carrito">Agregar al carrito</button>
        </div>
    )
}
