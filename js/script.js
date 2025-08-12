function colores() {
  const titulo = document.getElementById("titulo");
  setInterval(function () {
    const r = Math.floor(Math.random() * 145);
    const g = Math.floor(Math.random() * 145);
    const b = Math.floor(Math.random() * 145);
    titulo.style.color = `rgb(${r}, ${g}, ${b})`;
    titulo.style.textShadow = `2px 2px 8px rgba(${r}, ${g}, ${b}, 0.6)`;
  }, 1000);
}

function escalarElemento(elemento, escala) {
  if (elemento) {
    elemento.style.transform = `scale(${escala})`;
    elemento.style.transition = 'transform 0.3s ease';
  }
}

const redes = document.querySelectorAll(".redes-sociales a");
redes.forEach(p => {
  p.addEventListener('mouseover', () => escalarElemento(p, 1.2));
  p.addEventListener('mouseout', () => escalarElemento(p, 1));
});

function fechaHora() {
  const fecha = new Date();
  const dia = fecha.getDate();
  const hora = fecha.getHours().toString().padStart(2, '0');
  const minutos = fecha.getMinutes().toString().padStart(2, '0');
  const segundos = fecha.getSeconds().toString().padStart(2, '0');
  document.getElementById('fecha-hora').textContent = `Fecha:  ${dia} Hora: ${hora}:${minutos}:${segundos}`;
}
setInterval(fechaHora, 1000);
fechaHora();

let carritoContador = 0;
let carritoTotal = 0;
const contadorCarrito = document.getElementById('contador');
const precioTotal = document.getElementById('total-precio');
const productosCarrito = document.getElementById('productos-carrito-items');

function formatoPrecio(value) {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

let alertaVisible = false;
function alertaVerde() {
  if (alertaVisible) return;
  const alerta = document.getElementById('miAlerta');
  if (alerta) {
    alertaVisible = true;
    alerta.classList.add('visible');
    setTimeout(() => {
      alerta.classList.remove('visible');
      alertaVisible = false;
    }, 2000);
  }
}

function alertaRoja() {
  if (alertaVisible) return;
  const alerta = document.getElementById('miAlerta2');
  if (alerta) {
    alertaVisible = true;
    alerta.classList.add('visible2');
    setTimeout(() => {
      alerta.classList.remove('visible2');
      alertaVisible = false;
    }, 2000);
  }
}

function añadirCarrito(button) {
  alertaVerde();
  carritoContador++;
  contadorCarrito.textContent = `(${carritoContador})`;

  const producto = button.closest('.producto-venta');
  const clon = producto.cloneNode(true);
  clon.classList.add('div-clonado');

  const botonAñadir = clon.querySelector('.añadir-carrito');
  if (botonAñadir) botonAñadir.remove();

  const textoPrecio = clon.querySelector('.precio').textContent;
  const precio = parseFloat(textoPrecio.replace('$', '').replace(',', ''));
  carritoTotal += precio;
  precioTotal.textContent = formatoPrecio(carritoTotal);

  const bontonEliminar = document.createElement('button');
  bontonEliminar.textContent = 'Eliminar';
  bontonEliminar.classList.add('btn-eliminar');
  bontonEliminar.addEventListener('click', () => {
    alertaRoja();
    clon.remove();
    carritoContador--;
    carritoTotal -= precio;
    contadorCarrito.textContent = `(${carritoContador})`;
    precioTotal.textContent = formatoPrecio(carritoTotal);
  });

  clon.appendChild(bontonEliminar);
  productosCarrito.appendChild(clon);
}
const btnAñadirAlCarrito = document.querySelectorAll('.añadir-carrito');

btnAñadirAlCarrito.forEach(button => {
  button.addEventListener('click', () => añadirCarrito(button));
});

const menuHamburguesa = document.getElementById('menu-hamburguesa');
const ventanas = document.getElementById('ventanas');
if (menuHamburguesa && ventanas) {
  menuHamburguesa.addEventListener('click', () => {
    menuHamburguesa.classList.toggle('active');
    ventanas.classList.toggle('active');
  });
}
