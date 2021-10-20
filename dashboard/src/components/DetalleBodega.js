import React, { useEffect, useState } from 'react';
function DetalleBodega() {

  const [pro, setPro] = useState([]);

  const url1 = "http://localhost:2506/api/products";
  
  const fetchApi1 = async () => {
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    setPro(data1.products);
  }
  useEffect(() => { fetchApi1() }, []);

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const url = "http://localhost:2506/api/business";

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data.business);
    setCount(data.count)

  }
  useEffect(() => { fetchApi() }, []);
  return (
    <div>

      <h3>Productos por Bodega</h3>
      <div className="detalle" style={{ width: "45%" }}>
        {todos.map((todo, index) => {
          const a = new Object();
          a.name = todo.name;
          a.id = todo.idBusiness;
          a.valor = 0;
          pro.map((pro, index) => {
            if (pro.idBusiness == a.id) {
              a.valor = a.valor + 1
            } else { }
          });
          return <div style={{ display: "flex", margin: "1rem", width: "11rem"}}>
            <div className="nombre">
              <h4>{a.name}</h4>
              </div><div className="cantidad">
              <h4>{a.valor}</h4>
              </div></div>
        })}
      </div>




    </div>
  );
}

export default DetalleBodega;

