import React from 'react';
import '../Header/Header.css';
import { useState, useEffect } from "react";

const titulo = 'TECH GAMER';

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

function FechaHora() {
  const [fechaHora, setFechaHora] = useState("");
  useEffect(() => {
    const actualizar = () => {
      const fecha = new Date();
      const dia = fecha.getDate().toString().padStart(2, "0");
      // const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      // const anio = fecha.getFullYear();
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

export const Header = () => (
  <>
    <TituloPagina />
    <FechaHora />
    <BarraNavegacion />
  </>
);
