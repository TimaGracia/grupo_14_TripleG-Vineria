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
        <div className="container">
            <div className="responsive">{Head()}</div>
            <section>
                <div className="productos responsive">{Productos()}</div>
                <div className="usuarios responsive">{Usuarios()}</div>
                <div className="bodegas responsive">{Bodegas()}</div>
            </section>
            <section>
                <div className="ultimoproducto responsive">{UltimoProducto()}</div>
                <div className="detallebodega responsive">{DetalleBodega()}</div>
            </section>
            <section>
                <div className="responsive lista-products">{Apip()}</div>
            </section>
            
        </div>
    );
}

export default App;