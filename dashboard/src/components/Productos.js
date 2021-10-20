import React, { useEffect, useState } from 'react';
function Productos() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const url = "http://localhost:2506/api/products";
  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data.users);
    setCount(data.count)
  }
  useEffect(()=>{fetchApi()},[]);
  return (
    <div>
      <h3>Total de Productos</h3>
      <h2>{count}</h2>
      
    </div>
  );
}
export default Productos;
