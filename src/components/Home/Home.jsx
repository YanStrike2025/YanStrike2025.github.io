import React, { useState } from 'react';
import '../Home/Home.css';

const productos = [
  {
    id: '1',
    titulo: 'ASUS ROG Strix Z790-E',
    imageUrl:
      'https://mercury.vtexassets.com/arquivos/ids/19758497-1200-1200?v=638723826080470000&width=1200&height=1200&aspect=true',
    descripcion:
      'Placa madre Z790 para Intel 12ª/13ª gen con WiFi 6E, PCIe 5.0 y soporte DDR5.',
    precio: 379,
  },
  {
    id: '2',
    titulo: 'Intel Core i9-13900K',
    imageUrl: 'https://www.impacto.com.pe/storage/products/md/173878889291307.webp',
    descripcion: 'Procesador de 13ª generación con 24 núcleos y frecuencia turbo de 5.8GHz.',
    precio: 589,
  },
  {
    id: '3',
    titulo: 'AMD Ryzen 9 7950X',
    imageUrl: 'https://smartbusiness.pe/cdn/shop/products/procesador-amd-ryzen-9-7950x-3d-4-2ghz-hasta-5-7ghz-128mb-16-nucleos-am5-100-100000908wof-smart-business-1.jpg?v=1740114943',
    descripcion: 'Procesador con 16 núcleos y arquitectura Zen 4 optimizada para gaming y multitarea.',
    precio: 549,
  },
  {
    id: '4',
    titulo: 'NVIDIA RTX 4090',
    imageUrl: 'https://wondercris.com/cdn/shop/files/ebe8de72-8aea-4bac-8dc3-00e54bcafdd1.jpg?v=1719143670',
    descripcion: 'Tarjeta gráfica de última generación con 24GB GDDR6X y Ray Tracing.',
    precio: 1599,
  },
  {
    id: '5',
    titulo: 'AMD Radeon RX 7900 XTX',
    imageUrl: 'https://m.media-amazon.com/images/I/81il2WdPPJL._AC_SL1500_.jpg',
    descripcion: 'GPU de alto rendimiento con 24GB GDDR6 y soporte para 4K gaming.',
    precio: 999,
  },
  {
    id: '6',
    titulo: 'Corsair Vengeance DDR5 32GB',
    imageUrl: 'https://imagenes.deltron.com.pe//images/productos/on-line/items/large/me/32/me32cmhx5m2x720.jpg',
    descripcion: 'Memoria RAM DDR5 de 32GB (2x16GB) 6000MHz CL36 con disipador.',
    precio: 199,
  },
  {
    id: '7',
    titulo: 'Kingston Fury Beast DDR4 16GB',
    imageUrl: 'https://promart.vteximg.com.br/arquivos/ids/6763224-1000-1000/image-069062df8a484a17ba65d9e7239c7045.jpg?v=638128530216630000',
    descripcion: 'Memoria RAM DDR4 de 16GB 3200MHz para gaming.',
    precio: 69,
  },
  {
    id: '8',
    titulo: 'Samsung 980 PRO SSD 1TB',
    imageUrl: 'https://m.media-amazon.com/images/I/71S9dis6PRL._AC_SL1500_.jpg',
    descripcion: 'SSD NVMe Gen4 de 1TB con velocidades de hasta 7000 MB/s.',
    precio: 129,
  },
  {
    id: '9',
    titulo: 'WD Black SN850X 2TB',
    imageUrl: 'https://compumarket.pe/fotos/producto_13023_lg.jpg',
    descripcion: 'SSD NVMe de 2TB con rendimiento extremo para gaming.',
    precio: 229,
  },
  {
    id: '10',
    titulo: 'Cooler Master Hyper 212 Black',
    imageUrl: 'https://www.pcfactory.com.pe/public/foto/2189/1_1000.jpg?t=1729700540226',
    descripcion: 'Disipador de aire eficiente con ventilador de 120mm.',
    precio: 49,
  },
  {
    id: '11',
    titulo: 'NZXT Kraken Z73',
    imageUrl: 'https://images-cdn.ubuy.co.in/65e9dae8c6437f33e45a627f-nzxt-kraken-z73-360mm-liquid-cooler-with.jpg',
    descripcion: 'Refrigeración líquida AIO de 360mm con pantalla LCD personalizable.',
    precio: 279,
  },
  {
    id: '12',
    titulo: 'Corsair RM850x PSU',
    imageUrl: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Power-Supply-Units/base-rmx-2021-config/Gallery/RM850x_01.webp',
    descripcion: 'Fuente de poder modular 850W certificación 80+ Gold.',
    precio: 139,
  },
  {
    id: '13',
    titulo: 'EVGA SuperNOVA 1000 G5',
    imageUrl: 'https://m.media-amazon.com/images/I/71OaPvBxzPL._AC_SL1500_.jpg',
    descripcion: 'Fuente de alimentación modular de 1000W con 80+ Gold.',
    precio: 199,
  },
  {
    id: '14',
    titulo: 'Lian Li PC-O11 Dynamic',
    imageUrl: 'https://lian-li.com/wp-content/uploads/2020/11/O11D-black-side.jpg',
    descripcion: 'Gabinete de vidrio templado con amplio soporte para refrigeración líquida.',
    precio: 159,
  },
  {
    id: '15',
    titulo: 'NZXT H510 Flow',
    imageUrl: 'https://bermorzone.com.ph/wp-content/uploads/2024/08/H5-Flow-RGB-btz-ph-2.webp',
    descripcion: 'Gabinete ATX compacto con flujo de aire optimizado.',
    precio: 99,
  },
  {
    id: '16',
    titulo: 'ASUS ROG Swift 27”',
    imageUrl: 'https://dlcdnwebimgs.asus.com/gain/E44C568D-788E-4F7E-8A9F-B42734E5985C/w717/h525',
    descripcion: 'Monitor gaming 27” 1440p con 240Hz y G-Sync.',
    precio: 799,
  },
  {
    id: '17',
    titulo: 'LG Ultragear 32”',
    imageUrl: 'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3609/PMP20000804025/full_image-1.jpeg',
    descripcion: 'Monitor gaming 32” 4K UHD con 160Hz y HDR600.',
    precio: 899,
  },
  {
    id: '18',
    titulo: 'Logitech G Pro X Superlight',
    imageUrl: 'https://phantom.pe/media/catalog/product/cache/c58c05327f55128aefac5642661cf3d1/m/o/mouse_logitech_g_pro_x_superlight_2_blanco_1_.jpg',
    descripcion: 'Mouse inalámbrico ultraligero de alto rendimiento.',
    precio: 149,
  },
  {
    id: '19',
    titulo: 'Razer Huntsman Elite',
    imageUrl: 'https://blizzstoreperu.com/cdn/shop/products/TECLADO-RAZER-HUNTSMAN-ELITE-OPTO-MECHANICAL2_900x.jpg?v=1620060780',
    descripcion: 'Teclado mecánico con switches ópticos y RGB.',
    precio: 179,
  },
  {
    id: '20',
    titulo: 'SteelSeries Arctis Nova Pro',
    imageUrl: 'https://computerlounge.co.nz/cdn/shop/files/4d56ec10fedb8e782280345db9b10a56634cd210_62205_1.jpg?v=1722910429&width=900',
    descripcion: 'Audífonos gaming premium con cancelación activa de ruido.',
    precio: 329,
  },
  {
    id: '21',
    titulo: 'Elgato Stream Deck MK2',
    imageUrl: 'https://i0.wp.com/scorperu.com/wp-content/uploads/2024/06/mk2-white-4-3.jpg?fit=1500%2C1500&ssl=1',
    descripcion: 'Controlador personalizable para streamers con 15 teclas LCD.',
    precio: 149,
  },
];

export const Home = ({ sumarCarrito, restarCarrito }) => {
  const [cartItems, setCartItems] = useState([]);

  const agregarCarrito = (producto) => {
    setCartItems((prevItems) => [...prevItems, producto]);
  };

  const removerCarrito = (id) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1);
        restarCarrito();
        return newItems;
      }
      return prevItems;
    });
  };

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  return (
    <div className="contenedor-principal">
      <div className="contenedor-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-venta">
            <img
              className="producto-img"
              src={producto.imageUrl}
              alt={producto.titulo}
            />
            <h3>{producto.titulo}</h3>
            <p>{producto.descripcion}</p>
            <p className='precio'>${producto.precio}</p>
            <button
              className="añadir-carrito"
              onClick={() => {
                agregarCarrito(producto);
                sumarCarrito();
              }}
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        ))}
      </div>
      <div className="productos-carrito">
        <div className="productos-carrito-items" id="productos-carrito-items">
          <h1 className="titulo-productos-carrito">
            Carrito de compras
            <p>
              Total: <span id="total-precio">${calcularTotal()}</span>
            </p>
          </h1>
          {cartItems.length === 0 ? (
            <p className='titulo-carrito'>El carrito está vacío</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="carrito-item">
                <img
                  className="carrito-item-img"
                  src={item.imageUrl}
                  alt={item.titulo}
                />
                <div className="carrito-contenedor">
                  <h4>{item.titulo}</h4>
                  <p>${item.precio}</p>
                  <button
                    className="remover-carrito"
                    onClick={() => removerCarrito(item.id)}
                  >
                    ELIMINAR
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;