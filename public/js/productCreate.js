window.addEventListener('load', function() {
    
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
      let name = document.querySelector("#name");
      let a=document.querySelector("#a");
      let b=document.querySelector("#b");
      let a1=document.querySelector("#a1");


      if(!name.value){
        console.log("Hubo un error en el nombre");
        name.style.backgroundColor = "#FFABAB";
        a.style.display="flex";
        evento.preventDefault();
      }else if(name.value.length<5){
        console.log("Hubo un error en el nombre");
        name.style.backgroundColor = "#FFABAB";
        a1.style.display="flex";
        evento.preventDefault();
      }
      
      let description = document.querySelector("#description");
     
      if(description.value.length<20){
        console.log("Hubo un error en la descripcion");
        description.style.backgroundColor = "#FFABAB";
        b.style.display="flex";
        evento.preventDefault();
      }


      
    })
  });