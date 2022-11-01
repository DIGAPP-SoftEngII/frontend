import React from "react";
import Stars from "../../../components/Stars/Stars";
import { SiSpeedtest } from "react-icons/si";
import "./Statistics.css";

function Statistics({ est }) {
  return (
    <div className="statistics">
      {est ? (
        <>
          <div className="stat__item">
            <h3>Calificación</h3>
            {console.log(est.rating)}
            <Stars state={est.rating} />
          </div>
          <div className="stat__item">
            <h3>
              <SiSpeedtest size={20} className="stat__icon" />
              Internet
            </h3>
            <Stars state={est.internet_quality} />
          </div>
          <div className="stat__item">
            <h3>Capacidad</h3>
            <span>{est.capacity}</span>
          </div>
        </>
      ) : (
        <>Cargando</>
      )}
    </div>
  );
}

export default Statistics;
