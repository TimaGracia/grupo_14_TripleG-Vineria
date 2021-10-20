import React, { useEffect, useState } from 'react';
function Apiu() {
  const [todos, setTodos] = useState();
  const url = "http://localhost:2506/api/users";
  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
    console.log(data)
  }
  useEffect(()=>{fetchApi()},[])
  return (
    <div>
      <ul>
      {!todos ? 'Cargando...':
      todos.map( (todo,index)=>{return <li className="apipi">{todo.name}</li>})
      
      }
      </ul>
    </div>
  );
}

export default Apiu;