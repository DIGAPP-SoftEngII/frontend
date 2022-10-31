import React from "react";
import Stars from "../../../components/Stars/Stars";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, name, img, qualy, address }) {
  return (
    <Link className="my__card__container" to={`/establishment/${id}`}>
      <div className="image__card">
        <img src={img} alt="img__card" className="img__card" />
      </div>
      <div className="card__tittle">
        <h2 className="tittle">{name}</h2>
      </div>
      <div className="card__desc">
        <h3>Dirección</h3>
        <span>{address}</span>
        <h3>Calificación</h3>
        <Stars state={qualy} />
        <h3>Interenet</h3>
        <Stars state={qualy} />
      </div>
    </Link>
  );
}

export default Card;
