import { useState } from 'react';

function Header() {
  return (
    <>
      <header>
        <div>
          <h1 id="titulo">TechGamer Store</h1>
        </div>
      </header>
      <nav class="barra-navegacion">
        <div class="barra-izquierda">
          <input type="text" placeholder="Buscar..." class="search" />
        </div>
        <div class="barra-centro" id="ventanas">
          <a href="#">Inicio</a>
          <a href="#">Catálogo</a>
          <a href="#">Nosotros</a>
          <a href="#">Ayuda</a>
        </div>
        <button class="carrito">
          🛒 <span id="contador" class="contador-carrito"></span>
        </button>
        <div class="menu-hamburguesa" id="menu-hamburguesa">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}

export default Header;
