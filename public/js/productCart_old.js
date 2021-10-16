window.addEventListener('load', function() {

    //if (inputCantidad.value > 0){
       // console.log(subtotal);
       // console.log("hola");
   // }
const inputCantidad = document.querySelector("#cantidad1");

const inputPrecio = document.querySelector("#precio1");

const preTotal = document.querySelector("#pretotal1");

inputCantidad.addEventListener('change', function(evento) {


    const subtotal = (inputCantidad.value) * (inputPrecio.value);   
    
    const result = subtotal;

    preTotal.value = subtotal;



    //const pretotal= document.getElementById("pretotal").value = subtotal;

});

});
