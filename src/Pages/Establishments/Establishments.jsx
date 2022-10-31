import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Loading from "../../components/Loading/Loading";
import { getEstablishments } from "../../Services/Api";
import "./Establishments.css";

function Establisments() {
  const [establishments, setEstablishments] = useState();

  useEffect(() => {
    getEstablishments().then((data) => setEstablishments(data));
  }, []);

  return (
    <div className="establishments">
      <h2 className="ests__tittle">Establecimientos</h2>

      <div className="my__card">
        {establishments ? (
          establishments.map((est) => (
            <div key={est.id}>
              <Card
                id={est.id}
                name={est.name}
                img={est.cover_picture}
                qualy={est.rating}
                internet={est.internet_quality}
                address={est.address}
              />
            </div>
          ))
        ) : (
          <Loading className="my_loading" />
        )}
      </div>
    </div>
  );
}

export default Establisments;
