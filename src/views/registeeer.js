window.addEventListener("load",function(){
     let formulario = document.querySelector("form.formulario");
     formulario.addEventListener("submit",function(e){ 
         e.preventDefault(); 
         let campoNombre = document.querySelector("input.nombreCompleto"); 
         if(campoNombre.value=="tima"){ 
             alert("siiiiiu") 
         }else{ 
         alert("noooou")} 
        
     }) 
 }) 