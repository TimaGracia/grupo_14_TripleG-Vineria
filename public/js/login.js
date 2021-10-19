window.addEventListener('load', function() {
    
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
      
      let email=document.querySelector("#email");
      let password=document.querySelector("#password");
      let uno=document.querySelector("#uno");
      let dos=document.querySelector("#dos");
      let error=document.querySelector("#error");

      if(!email.value){
        console.log("Hubo un error en el email");
        email.style.backgroundColor = "#FFABAB";
        uno.style.display="flex";
        evento.preventDefault();
        error.style.display="none";

      }else{}
      
     
     
      
      
      
      if(!password.value){
        console.log("Hubo un error en la contraseña");
        password.style.backgroundColor = "#FFABAB";
        dos.style.display="flex";
        evento.preventDefault();
        error.style.display="none";
      }else{}
      
      
      
    })
  });