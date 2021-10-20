import React, { useEffect, useState } from 'react';
function Bodegas() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const url = "http://localhost:2506/api/business";
  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCount(data.count)
    
    
  }
  useEffect(()=>{fetchApi()},[])
  return (
    <div>
      <h2>Bodegas</h2>
      <h2>{count}</h2>
      
      
    </div>
  );
}

export default Bodegas;
