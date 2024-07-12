const apiKey = 'ktkXwu0P-mMXC118SIHBgu8cRq_J6zyLCPS6c6Q1FOk';
const query = 'soccer';
const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.urls.regular;
        const imageElement = document.getElementById('randomImg');
        imageElement.src = imageUrl;
        imageElement.alt = data.alt_description || 'Imagen de fútbol';
    })