function renderCart() {
    const cart = loadCartFromLocalStorage();
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

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

function funcionPagar() {
    const cart = loadCartFromLocalStorage();

    if (cart.length === 0) {
        Swal.fire({
            title: "Error",
            text: "El carrito está vacío.",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        title: "Pago exitoso",
        icon: "success"
    }).then(() => {
        localStorage.removeItem('cart');
        renderCart();
    });
}
function funcionVaciar(){
    localStorage.removeItem('cart');
        renderCart();
}
document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    const btPagar = document.getElementById('btPagar');
    btPagar.addEventListener('click', funcionPagar);

    const btVaciar = document.getElementById('btVaciar');
    btVaciar.addEventListener('click', funcionVaciar);
});


