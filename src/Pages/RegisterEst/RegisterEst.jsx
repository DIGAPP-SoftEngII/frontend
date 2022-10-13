import React from "react";
import "./RegisterEst.css";

function RegisterEst() {
  return (
    <div className="registerEst">
      <div className="container">
        <h1>Registrar Establecimento</h1>
        <form className="inputs__container">
          <input
            className="input"
            type="text"
            placeholder="Nombre del Establecimiento"
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Breve descripcion del Establecimiento"
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Ingrese un breve Menu de su establecimiento"
          ></input>
          <input className="input" type="text" placeholder="Ciudad"></input>
          <input className="input" type="text" placeholder="Direccion"></input>
          <input
            className="input"
            type="text"
            placeholder="Tipo de establecimiento"
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Hora de apertura"
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Hora de cierre"
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Numero telefonico"
          ></input>
          <button className="btn">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterEst;
