import React from "react";
import Apip from "./ApiProducts";
import Productos from "./Productos";
import Bodegas from "./Bodegas";
import Usuarios from "./Usuarios";
import UltimoProducto from "./UltimoProducto";
import DetalleBodega from "./DetalleBodega";
import Head from "./Head";
import "./css/app.css";

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