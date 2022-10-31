import { useState } from "react";
import { useParams } from "react-router-dom";
import { setReport } from "../../../Services/Api";
import { FaStar } from "react-icons/fa";
import Cookies from "universal-cookie";
import "./MakeReport.css";

const cookies = new Cookies();

function MakeReport() {
  const { id } = useParams();

  const [rating_business, setRating_business] = useState(0);
  const [internet_status, setInternet_status] = useState(0);
  const [occupation_status, setOccupation_status] = useState("");
  const [comments, setComments] = useState("");

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);
  const stars2 = Array(3).fill(0);

  const data = {
    rating_business,
    internet_status,
    occupation_status,
    comments,
    report_support: 0,
    business_id: parseInt(id),
    user_id: cookies.get("id"),
  };

  const postReport = () => {
    setReport({ data }).then((window.location.href = `/establishment/${id}`));
  };

  /// Handle will be used to refactor code
  /*   const handleChange = (name, value) => {
    if (name === "rating_business") {
      console.log(name, rating_business);
      setRating_business(value);
    } else if (name === "internet_status") {
      console.log(name, internet_status);
      setInternet_status(value);
    } else if (name === "occupation_status") {
      console.log(name, occupation_status);
      setOccupation_status(value);
    } else if (name === "comments") {
      console.log(name, comments);
      setComments(value);
    }
  }; */

  const handleChange = (value) => {
    setComments(value);
  };

  return (
    <div className="makeReport">
      <h3 className="make__tittle">Reporta</h3>
      <div className="starSecction">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={20}
              color={rating_business > index ? colors.orange : colors.grey}
              onClick={() => {
                setRating_business(index + 1);
              }}
            />
          );
        })}
        <p className="maketext"> Califica nuestro establecimiento</p>

        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={20}
              color={internet_status > index ? colors.orange : colors.grey}
              onClick={() => {
                setInternet_status(index + 1);
              }}
            />
          );
        })}
        <p className="maketext"> Califica Nuestro internet</p>

        {stars2.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={20}
              color={occupation_status > index ? colors.orange : colors.grey}
              onClick={() => {
                setOccupation_status(index + 1);
              }}
            />
          );
        })}
        <p className="maketext"> Ocupacion</p>
        <input
          type="textarea"
          className="make__input make__text__area"
          name="comments"
          placeholder="Dejanos tus comentarios"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          className="make__btn"
          onClick={() => {
            postReport();
          }}
        >
          Reportar
        </button>
      </div>
      {/* <div className="make__form__container">
        <form className="make__form">
          <span className="make__text">Calificación del lugar</span>
          <select
            className="make__input"
            name="rating_business"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={4}>5</option>
          </select>
          <span className="make__text">Velocidad Internet</span>
          <select
            className="make__input"
            name="internet_status"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={4}>5</option>
          </select>
          <span className="make__text">Ocupación</span>
          <select
            className="make__input"
            name="occupation_status"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <option value={1}>Vacío</option>
            <option value={2}>Intermedio</option>
            <option value={3}>LLeno</option>
          </select>
          <span className="make__text">Cometarios</span>
          <input
            type="textarea"
            className="make__input make__text__area"
            name="comments"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </form>
      </div>
      <button
        className="make__btn"
        onClick={() => {
          postReport();
        }}
      >
        Reportar
      </button> */}
    </div>
  );
}

export default MakeReport;
