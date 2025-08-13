import React from 'react'

const productos = [
  {
    id: '1',
    titulo: 'ASUS ROG Strix Z790-E',
    imageUrl:
      'https://mercury.vtexassets.com/arquivos/ids/19758497-800-800?v=638723826080470000&width=800&height=800&aspect=true',
    descripcion:
      'Placa madre Z790 para Intel 12ª/13ª gen con WiFi 6E, PCIe 5.0 y soporte DDR5.',
    precio: 379,
  },
  // Se eliminó el producto duplicado
  {
    id: '2',
    titulo: 'ASUS ROG Strix Z790-E',
    imageUrl:
      'https://mercury.vtexassets.com/arquivos/ids/19758497-800-800?v=638723826080470000&width=800&height=800&aspect=true',
    descripcion:
      'Placa madre Z790 para Intel 12ª/13ª gen con WiFi 6E, PCIe 5.0 y soporte DDR5.',
    precio: 379,
  },
  {
    id: '3',
    titulo: 'ASUS ROG Strix Z790-E',
    imageUrl:
      'https://mercury.vtexassets.com/arquivos/ids/19758497-800-800?v=638723826080470000&width=800&height=800&aspect=true',
    descripcion:
      'Placa madre Z790 para Intel 12ª/13ª gen con WiFi 6E, PCIe 5.0 y soporte DDR5.',
    precio: 379,
  },
  {
    id: '4',
    titulo: 'ASUS ROG Strix Z790-E',
    imageUrl:
      'https://mercury.vtexassets.com/arquivos/ids/19758497-800-800?v=638723826080470000&width=800&height=800&aspect=true',
    descripcion:
      'Placa madre Z790 para Intel 12ª/13ª gen con WiFi 6E, PCIe 5.0 y soporte DDR5.',
    precio: 379,
  },
  {
    id: '5',
    titulo: 'ASUS ROG Strix Z790-E',
    imageUrl:
      'https://mercury.vtexassets.com/arquivos/ids/19758497-800-800?v=638723826080470000&width=800&height=800&aspect=true',
    descripcion:
      'Placa madre Z790 para Intel 12ª/13ª gen con WiFi 6E, PCIe 5.0 y soporte DDR5.',
    precio: 379,
  },
];

export const Home = () => {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-productos">
        {productos
          .filter((producto) => producto) // producto.id === '1' para filtrar
          .map((producto) => (
            <div key={producto.id} className="producto-venta">
              <img
                className="producto-img"
                src={producto.imageUrl}
                alt={producto.titulo}
              />
              <h3>{producto.titulo}</h3>
              <p>{producto.descripcion}</p>
              <p>${producto.precio}</p>
              <button className="añadir-carrito">AGREGAR AL CARRITO</button>
            </div>
          ))}
      </div>
      <div className="productos-carrito">
        <div className="productos-carrito-items" id="productos-carrito-items">
          <h1 className="titulo-productos-carrito">
            Carrito de compras
            <p>
              Total: <span id="total-precio">$0.00</span>
            </p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home;