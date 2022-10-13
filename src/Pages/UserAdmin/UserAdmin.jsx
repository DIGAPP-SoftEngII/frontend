import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "./UserAdmin.css";

const cookies = new Cookies();

function UserAdmin() {
  return (
    <div className="userAdmin">
      <div className="container">
        {/* Personal Data */}
        <div className="PersonsonaData">
          <hr />
          <h1>Datos personales</h1>
          Nombre de Usuario: <h3>{`${cookies.get("name")}`}</h3>
          <hr />
        </div>
        <div className="EstFavs">
          <hr />
          <h1>Establecimientos Favoritos</h1>
          <hr />
        </div>
        <div className="AdministrarEst">
          <hr />
          <h1>Tus Establecimientos</h1>
          <Link to={`/user/${cookies.get("id")}/registerEst`}>
            Registrar iun establecimiento nuevo
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
