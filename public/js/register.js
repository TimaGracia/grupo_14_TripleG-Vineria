window.addEventListener('load', function() {
    
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
      let nombreCompleto = document.querySelector("#nombreCompleto");
      
      if(!nombreCompleto.value){
        console.log("Hubo un error en el nombre");
        nombreCompleto.style.border = "#EC7063";
        evento.preventDefault();
      }else if(nombreCompleto.value.length<3){
        console.log("Hubo un error en el nombre");
        nombreCompleto.style.borderColor = "#EC7063";
        evento.preventDefault();
      }
      
      let email = document.querySelector("#email");
     
      if(!email.value){
        console.log("Hubo un error en el email");
        email.style.borderColor = "#EC7063";
        evento.preventDefault();
      }

      let contrasenia = document.querySelector("#contrasenia");
      
      if(!contrasenia.value){
        console.log("Hubo un error en la contraseña");
        contrasenia.style.borderColor = "#EC7063";
        evento.preventDefault();
      }else if(contrasenia.value.length<8){
        console.log("Hubo un error en la contraseña");
       contrasenia.style.borderColor = "#EC7063";
        evento.preventDefault();
      }
      

      
    })
  });