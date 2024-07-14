const apiKey = 'ktkXwu0P-mMXC118SIHBgu8cRq_J6zyLCPS6c6Q1FOk';
const query = 'soccer';

function fetchRandomImagen(element) {
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            element.src = imageUrl;
            element.alt = data.alt_description || 'Imagen de fútbol';
        })
        .catch(error => console.error('Error al obtener la imagen:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const imageElements = document.querySelectorAll('.randomImg');
    imageElements.forEach(imgElement => {
        fetchRandomImagen(imgElement);
    });
});