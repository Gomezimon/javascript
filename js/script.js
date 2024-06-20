//Barra de menú
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Inicio", "Portfolio", "Contacto", "Servicios"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const origen = document.createElement('a');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';


origen.href = '/';
origen.appendChild(img);
img.src = 'assets/img/logo.png';
img.alt = 'Designmez Logo';
liImagen.appendChild(origen);
ul.appendChild(liImagen);

img.style.width = "100px";

for (const link of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `${link.toLowerCase()}.html`;
    a.textContent = link;
    li.appendChild(a);
    ul.appendChild(li);
    a.addEventListener('mouseover', () => {
        a.style.fontSize = '22px';
    });

    a.addEventListener('mouseout', () => {
        a.style.fontSize = '20px';
    })
}

/************************************* */

/**Carrito de compras */

const servicios = [
    { id: 0, nombre: "Sketch y diseño en Figma", precio: 40 },
    { id: 1, nombre: "Desarrollo y programación del sitio", precio: 160 },
    { id: 2, nombre: "Diseño para dispositivos moviles (responsive)", precio: 70 },
    { id: 3, nombre: "Modificaciones fuera de tiempo", precio: 30 }
];

let cart = loadCartFromLocalStorage();

function addToCart(serviceId) {
    const servicio = servicios.find(p => p.id === serviceId);
    if (!servicio) {
        console.error("Servicio no encontrado");
        return;
    }

    const cartItem = cart.find(item => item.id === serviceId);
    if (!cartItem) {
        cart.push({
            id: servicio.id,
            nombre: servicio.nombre,
            cantidad: 1,
            precioTotal: servicio.precio
        });
    } else {
        console.error("El servicio ya ha sido agregado al carrito.");
        return;
    }

    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const ListaServicios = document.getElementById('lista-servicios');
    ListaServicios.innerHTML = '';
    servicios.forEach(servicio => {
        const DivServicios = document.createElement('div');
        DivServicios.classList.add('servicio');
        DivServicios.innerHTML = `
            <p>${servicio.nombre} - $${servicio.precio}</p>
            <button class="boton" onclick="addToCart(${servicio.id})">Seleccionar servicio</button>
        `;
        ListaServicios.appendChild(DivServicios);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('carrito-item');
        cartItemDiv.innerHTML = `
            <p>${item.nombre}. Precio: $${item.precioTotal}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
        total += item.precioTotal;
    });

    const totalDiv = document.getElementById('total');
    totalDiv.textContent = `Total: $${total}`;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});
