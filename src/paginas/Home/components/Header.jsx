import React from 'react'
import '../../Estilos/Header.css';

export const Header = () => {
    return (
        <>
            <header>
                <>
                    <h1 id="titulo">TechGamer Store</h1>
                </>
            </header>
            <nav className="barra-navegacion">
                <div className="barra-izquierda">
                    <input type="text" placeholder="Buscar..." className="search" />
                </div>
                <div className="barra-centro" id="ventanas">
                    <a href="#">Inicio</a>
                    <a href="#">Catálogo</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Ayuda</a>
                </div>
                <button className="carrito">🛒 <span id="contador" className="contador-carrito"></span></button>
                <div className="menu-hamburguesa" id="menu-hamburguesa">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}
