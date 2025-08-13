import React from 'react';
import '../Header/Header.css';

const titulo = 'CLOUD SHOP';

const TituloPagina = () => (
  <header>
    <h1 id="titulo">{titulo}</h1>
  </header>
);

const Buscador = ({ placeholder = 'Buscar...' }) => (
  <div className="contenedor-buscador">
    <input type="text" placeholder={placeholder} className="search" />
  </div>
);

function BarraCentro() {
    return (
        <div className="barra-centro" id="ventanas">
            <a href="#">Inicio</a>
            <a href="#">Catálogo</a>
            <a href="#">Nosotros</a>
            <a href="#">Ayuda</a>
        </div>
    );
}

const Carrito = () => (
  <button className="carrito">
    🛒 carrito<span id="contador" className="contador-carrito"></span>
  </button>
);

const MenuHamburguesa = () => (
  <div className="menu-hamburguesa" id="menu-hamburguesa">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const BarraNavegacion = () => (
  <nav className="barra-navegacion">
    <Buscador />
    <BarraCentro />
    <Carrito />
    <MenuHamburguesa />
  </nav>
);

export const Header = () => (
  <>
    <TituloPagina />
    <BarraNavegacion />
  </>
);
