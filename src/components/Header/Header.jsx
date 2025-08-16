import React, { useState, useEffect, useRef } from 'react';
import '../Header/Header.css';

const titulo = 'TECH GAMER';

const TituloPagina = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 145);
      const g = Math.floor(Math.random() * 145);
      const b = Math.floor(Math.random() * 145);
      if (titleRef.current) {
        titleRef.current.style.color = `rgb(${r}, ${g}, ${b})`;
        titleRef.current.style.textShadow = `2px 2px 8px rgba(${r}, ${g}, ${b}, 0.6)`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <h1 id="titulo" ref={titleRef}>{titulo}</h1>
    </header>
  );
};

const Buscador = ({ placeholder = 'Buscar...' }) => (
  <div className="contenedor-buscador">
    <input type="text" placeholder={placeholder} className="search" />
  </div>
);

const BarraCentro = () => (
  <div className="barra-centro" id="ventanas">
    <a href="#">Inicio</a>
    <a href="#">Catálogo</a>
    <a href="#">Nosotros</a>
    <a href="#">Ayuda</a>
  </div>
);

const Carrito = ({ contadorCarrito = 0 }) => (
  <button className="carrito">
    🛒 carrito <span id="contador" className="contador-carrito">{contadorCarrito}</span>
  </button>
);

const MenuHamburguesa = () => (
  <div className="menu-hamburguesa" id="menu-hamburguesa">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const BarraNavegacion = ({ contadorCarrito = 0 }) => (
  <nav className="barra-navegacion">
    <Buscador />
    <BarraCentro />
    <Carrito contadorCarrito={contadorCarrito} />
    <MenuHamburguesa />
  </nav>
);

function FechaHora() {
  const [fechaHora, setFechaHora] = useState("");
  useEffect(() => {
    const actualizar = () => {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, "0");
      const hora = fecha.getHours().toString().padStart(2, "0");
      const minutos = fecha.getMinutes().toString().padStart(2, "0");
      const segundos = fecha.getSeconds().toString().padStart(2, "0");
      setFechaHora(
        `Fecha: ${dia} Hora: ${hora}:${minutos}:${segundos}`
      );
    };
    actualizar();
    const intervalo = setInterval(actualizar, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return <div id="fecha-hora">{fechaHora}</div>;
}

export const Header = ({ contadorCarrito = 0 }) => (
  <>
    <TituloPagina />
    <FechaHora />
    <BarraNavegacion contadorCarrito={contadorCarrito} />
  </>
);