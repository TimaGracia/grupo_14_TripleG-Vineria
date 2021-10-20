import React, { useEffect, useState } from 'react';

function Apip() {
  const [todos, setTodos] = useState();
  
  const url = "http://localhost:2506/api/products";
  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data.products);
  }
  useEffect(()=>{fetchApi()},[]);
  return (
    <div className="apip">
      <h3 className="titulo">Lista de Productos</h3>
      <ul>
      {!todos ? 'Cargando...':
      todos.map( (todo,index)=>{return <div className="apipi">
        <li className="apipi-nombre">{todo.name}</li>
        <a href={"http://localhost:2506/products/"+todo.idProduct} className="apipi-detalle">Ver Detalle</a>
        </div>})
      
      }
      </ul>
    </div>
  );
}

export default Apip;
