import React, { useEffect, useState } from 'react';
function UltimoProducto() {
  const [ultimo, setUltimo] = useState([]);
  const url = "http://localhost:2506/api/products";
  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUltimo(data.ultimo)
    
    
  }
  useEffect(()=>{fetchApi()},[])
  return (
    <div>
      <h3>Ultimo Producto Creado</h3>
      <h4>{ultimo.name}</h4>
      <p>{ultimo.description}</p>
      <a href={"http://localhost:2506/products/"+ultimo.idProduct} className="apipi-detalle">Ver Detalle</a>
      
      
    </div>
  );
}

export default UltimoProducto;