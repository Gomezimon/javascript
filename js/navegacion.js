//Barra de menú
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Inicio", "Catalogo", "Carrito", "Contacto"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const origen = document.createElement('a');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';


origen.href = 'inicio.html';
origen.appendChild(img);
img.src = 'assets/img/logo.png';
img.alt = 'Designmez Logo';
liImagen.appendChild(origen);
ul.appendChild(liImagen);

img.style.height = "80px";

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