import React from "react";
import Apip from "./ApiProducts";
import Productos from "./Productos";
import Bodegas from "./Bodegas";
import Usuarios from "./Usuarios";
import UltimoProducto from "./UltimoProducto";
import DetalleBodega from "./DetalleBodega";
import "./css/app.css";

function App(){
    return(
        <div>
            <section>
                <div className="productos">{Productos()}</div>
                <div className="usuarios">{Usuarios()}</div>
                <div className="bodegas">{Bodegas()}</div>
            </section>
            <section>
                <div className="ultimoproducto">{UltimoProducto()}</div>
                <div className="detallebodega">{DetalleBodega()}</div>
            </section>
            <div className="apip">{Apip()}</div>
            
            
        </div>
    );
}

export default App;