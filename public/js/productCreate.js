window.addEventListener('load', function() {
    
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
      let name = document.querySelector("#name");
      
      if(!name.value){
        console.log("Hubo un error en el nombre");
        name.style.borderColor = "#EC7063";
        evento.preventDefault();
      }else if(name.value.length<5){
        console.log("Hubo un error en el nombre");
        name.style.borderColor = "#EC7063";
        evento.preventDefault();
      }
      
      let description = document.querySelector("#description");
     
      if(description.value.length<20){
        console.log("Hubo un error en la descripcion");
        description.style.borderColor = "#EC7063";
        evento.preventDefault();
      }


      
    })
  });