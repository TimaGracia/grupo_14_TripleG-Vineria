window.addEventListener('load', function() {
    
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
      let nombreCompleto = document.querySelector("#nombreCompleto");
      let a=document.querySelector("#a");
      let b=document.querySelector("#b");
      let c=document.querySelector("#c");
      let a1=document.querySelector("#a1");
      let c1=document.querySelector("#c1");

      if(!nombreCompleto.value){
        console.log("Hubo un error en el nombre");
        nombreCompleto.style.backgroundColor = "#FFABAB";
        a.style.display="flex";
        evento.preventDefault();
      }else if(nombreCompleto.value.length<3){
        console.log("Hubo un error en el nombre");
        nombreCompleto.style.backgroundColor = "#FFABAB";
        a1.style.display="flex";
        evento.preventDefault();
      }
      
      let email = document.querySelector("#email");
     
      if(!email.value){
        console.log("Hubo un error en el email");
        email.style.backgroundColor = "#FFABAB";
        b.style.display="flex";
        evento.preventDefault();
      }

      let password = document.querySelector("#password");
      
      if(!password.value){
        console.log("Hubo un error en la contraseña");
        password.style.backgroundColor = "#FFABAB";
        c.style.display="flex";
        evento.preventDefault();
      }else if(password.value.length<8){
        console.log("Hubo un error en la contraseña");
        password.style.backgroundColor = "#FFABAB";
        c1.style.display="flex";
        evento.preventDefault();
      }
      

      
    })
  });