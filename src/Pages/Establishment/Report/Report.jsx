import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MakeReport from "../MakeReport/MakeReport";
import Loading from "../../../components/Loading/Loading";

import "./Report.css";
import { getReports } from "../../../Services/Api";

function Report() {
  const { id } = useParams();
  const [reports, setReports] = useState([]);
  const [makeRep, setMakerep] = useState(false);

  const makeReport = () => {
    setMakerep(true);
  };

  useEffect(() => {
    getReports().then((data) => {
      const reps = [];
      data.map((rep) => {
        if (rep.business_id === parseInt(id)) {
          reps.push(rep);
        }
        return null;
      });
      setReports(reps);
    });
  }, []);

  return (
    <div className="report">
      {makeRep ? (
        <MakeReport />
      ) : (
        <button
          className="rep__button"
          onClick={() => {
            makeReport();
          }}
        >
          ¡ Realizar un Reporte !
        </button>
      )}

      {reports ? (
        reports.map((rep) => (
          <div key={rep.id} className="report__container">
            <hr />
            <div className="report__info">
              <div className="rep__item">
                <h3>Usuario</h3>
                <span>{rep.user_id}</span>
              </div>
              <div className="rep__item">
                <h3>Calificación</h3>
                <span>{rep.rating_business}</span>
              </div>
              <div className="rep__item">
                <h3>Internet</h3>
                <span>{rep.internet_status}</span>
              </div>
              <div className="rep__item">
                <h3>Ocupación</h3>
                <span>{rep.occupation_status}</span>
              </div>
            </div>
            <div className="report__comment">
              <div className="rep__item">
                <h3>Comentario</h3>
                <span>{rep.comments}</span>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Report;
