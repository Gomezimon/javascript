
function calcularPresupuesto() {
    const precios = {
        "Sketch y diseño en Figma": 40,
        "Desarrollo y programación del sitio": 160,
        "Diseño para dispositivos móviles (responsive)": 70,
        "Modificaciones fuera de tiempo": 30
    };

    let total = 0;
    let servicioSelecionado = [];

    const servicio = Object.keys(precios);

    servicio.forEach(item => {
        let respuesta = prompt(`¿Deseas incluir "${item}" por ${precios[item]} USD? (sí/no)`);
        if (respuesta.toLowerCase() === "si") {
            total += precios[item];
            servicioSelecionado.push(item);
        }
    });

    if (servicioSelecionado.length > 0) {
        alert(`Has seleccionado los siguientes items:\n\n${servicioSelecionado.join('\n')}\n\nEl precio total es: ${total} USD`);
    } else {
        alert("No has seleccionado ningún item.");
    }
}
