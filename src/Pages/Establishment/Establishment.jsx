import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Statistics from "./Statistics/Statistics";
import Report from "./Report/Report";
import Cookies from "universal-cookie";
import Loading from "../../components/Loading/Loading";
import { getEstablishment } from "../../Services/Api";
import { TbBrandAirtable } from "react-icons/tb";
import {
  MdPhone,
  MdLocationOn,
  MdOutlineMarkunreadMailbox,
  MdMenuBook,
  MdErrorOutline,
  MdAccessTime,
  MdAccessTimeFilled,
} from "react-icons/md";
import "./Establishment.css";

const cookies = new Cookies();

function Establishment() {
  const [outVisible, setOutvisible] = useState(false);
  const [est, setEst] = useState();
  const { id } = useParams();

  useEffect(() => {
    getEstablishment({ id })
      .then((data) => setEst(data))
      .catch((error) => {
        return error.response.data;
      })
      .then((error) => {
        if (error?.detail === "Not found.") {
          console.log(error.detail);
          window.location.href = "/NotFound";
        }
      });
    sesionValidation();
  }, []);

  const sesionValidation = () => {
    if (!cookies.get("name")) {
      setOutvisible(false);
    } else {
      setOutvisible(true);
    }
  };

  return (
    <div className="establishment">
      {est ? (
        <div className="est__container">
          <img src={est?.cover_picture} className="est__img" alt="cover-img" />
          <h1 className="est__tittle"> {est.name} </h1>
          <div className="est__desc">
            <MdErrorOutline size={20} className="est__icon" />
            <span className="est__subtittle  cursive">Descripción</span>
            <p className="est__text"> {est.description} </p>
            <MdMenuBook size={20} className="est__icon" />
            <span className="est__subtittle cursive">Menú</span>
            <p className="est__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sit doloribus voluptatibus! Et eius, officiis, in earum at optio
              aliquam voluptate consequatur rem iste consectetur cumque
              similique minus dolores reiciendis accusamus amet placeat tempore
              veniam. Dignissimos dicta, doloribus magnam suscipit molestiae
              totam rem quaerat nesciunt! Atque mollitia nam blanditiis amet.
            </p>
          </div>
          <div className="est__information">
            <h3 className="est__subtittle  cursive">Información</h3>
            <p className="est__text">
              <MdLocationOn size={20} className="est__icon" />
              <span className="est__text__negrita">Ciudad:</span> {est.city}
            </p>
            <p className="est__text">
              <MdOutlineMarkunreadMailbox size={20} className="est__icon" />
              <span className="est__text__negrita">Dirección:</span>{" "}
              {est.address}
            </p>
            <p className="est__text">
              <TbBrandAirtable size={20} className="est__icon" />
              <span className="est__text__negrita">
                Tipo de Establecimiento:
              </span>{" "}
              {est.type}
            </p>
            <p className="est__text">
              <MdAccessTime size={20} className="est__icon" />
              <span className="est__text__negrita">Hora Apertura:</span>{" "}
              {est.Opening}
            </p>
            <p className="est__text">
              <MdAccessTimeFilled size={20} className="est__icon" />
              <span className="est__text__negrita">Hora de Cierre:</span>{" "}
              {est.Closing}
            </p>
            <p className="est__text">
              <MdPhone size={20} className="est__icon" />
              <span className="est__text__negrita \t">Telefono:</span>{" "}
              {est.telephone_number}
            </p>
          </div>
          <div className="est__est">
            <Statistics est={est} />
          </div>
          <div className="est__rep">
            <h3 className="est_subtittle cursive">Comentarios</h3>
            {outVisible ? (
              <Report />
            ) : (
              <Link className="est__button est__link" to="/login">
                ¡{" "}
                <span className="est__text__negrita est__ses">
                  Inicie sesion
                </span>{" "}
                para realizar un reporte !
              </Link>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Establishment;
