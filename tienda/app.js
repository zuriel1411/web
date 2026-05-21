const calcular = () => {

    var producto = document.querySelector("#producto").value;
    var img = document.querySelector("#img");
    var precio = document.querySelector("#precio");

    var costo = 0;
    var plazo = 0;
    var aumento = 0;

    img.innerHTML = `<img src="img/${producto}.jpg" width="400">`;

    switch(producto){
        case "tv":
            costo = 8000;
            break;

        case "comedor":
            costo = 15000;
            break;

        case "lavadora":
            costo = 18000;
            break;

        case "moto":
            costo = 300000;
            break;

        case "sala":
            costo = 21000;
            break;
    }

    precio.innerHTML = `<h3>Precio: $ ${costo.toFixed(2)} MXN</h3>`;

    var uno = document.querySelector("#uno");
    var dos = document.querySelector("#dos");
    var tres = document.querySelector("#tres");

    var cantidad = document.querySelector("#cantidad").value;

    if(uno.checked){
        plazo = 6;
        aumento = 0.10;
    }
    else if(dos.checked){
        plazo = 12;
        aumento = 0.15;
    }
    else{
        plazo = 18;
        aumento = 0.20;
    }

    var contado = costo * cantidad;
    var credito = contado + (contado * aumento);
    var abono = credito / plazo;

    document.querySelector("#contado").innerHTML =
    `<h3>Precio de contado: $ ${contado.toFixed(2)} MXN</h3>`;

    document.querySelector("#credito").innerHTML =
    `<h3>Precio a crédito: $ ${credito.toFixed(2)} MXN</h3>`;

    document.querySelector("#abono").innerHTML =
    `<h3>Abono mensual: $ ${abono.toFixed(2)} MXN</h3>`;
}