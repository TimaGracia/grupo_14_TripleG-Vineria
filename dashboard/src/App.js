import React from "react";
import Apip from "./components/ApiProducts";
import Productos from "./components/Productos";
import Bodegas from "./components/Bodegas";
import Usuarios from "./components/Usuarios";
import UltimoProducto from "./components/UltimoProducto";
import DetalleBodega from "./components/DetalleBodega";
import Head from "./components/Head";
import "./components/css/app.css";

function App(){
    return(
        <div>
            <div>{Head()}</div>
            <section>
                <div className="productos">{Productos()}</div>
                <div className="usuarios">{Usuarios()}</div>
                <div className="bodegas">{Bodegas()}</div>
            </section>
            <section>
                <div className="ultimoproducto">{UltimoProducto()}</div>
                <div className="detallebodega">{DetalleBodega()}</div>
            </section>
            <section>
                <div>{Apip()}</div>
            </section>
            
        </div>
    );
}

export default App;