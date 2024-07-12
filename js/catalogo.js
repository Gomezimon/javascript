/**Carrito de compras */

class camiseta {
    constructor(seleccion, talla, precio) {
        this.seleccion = seleccion;
        this.talla = talla;
        this.precio = precio;
    }
}

const camisetas = [
    new camiseta('Venezuela', 'S', 18),
    new camiseta('Venezuela', 'M', 18),
    new camiseta('Venezuela', 'L', 18),
    new camiseta('Venezuela', 'XL', 18),

    new camiseta('Argentina', 'S', 20),
    new camiseta('Argentina', 'M', 20),
    new camiseta('Argentina', 'L', 20),
    new camiseta('Argentina', 'XL', 20),

    new camiseta('Chile', 'S', 18),
    new camiseta('Chile', 'M', 18),
    new camiseta('Chile', 'L', 18),
    new camiseta('Chile', 'XL', 18),

    new camiseta('Perú', 'S', 15),
    new camiseta('Perú', 'M', 15),
    new camiseta('Perú', 'L', 15),
    new camiseta('Perú', 'XL', 15),

    new camiseta('Brasil', 'S', 20),
    new camiseta('Brasil', 'M', 20),
    new camiseta('Brasil', 'L', 20),
    new camiseta('Brasil', 'XL', 20),

    new camiseta('Colombia', 'S', 20),
    new camiseta('Colombia', 'M', 20),
    new camiseta('Colombia', 'L', 20),
    new camiseta('Colombia', 'XL', 20),
];

let cart = loadCartFromLocalStorage();

function addToCart(seleccion, talla) {
    const camiseta = camisetas.find(c => c.seleccion === seleccion && c.talla === talla );
    if (camiseta) {
        cart.push(camiseta);
        Swal.fire({
            title: "Añadido al carrito",
            icon: "success"
        })
        saveCartToLocalStorage();
    } else {
        Swal.fire({
            title: "Camiseta no disponible",
            icon: "error"
        })
    };
}
function saveCartToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
/*
//render carrito
function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    cart.forEach(camiseta => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('carrito-item');
        cartItemDiv.innerHTML = `
            <p>${camiseta.seleccion}. Talla ${camiseta.talla}. Precio: $${camiseta.precio}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
    
    const total = cart.reduce ((sum, camiseta) => sum + camiseta.precio, 0);
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
*/