import React from "react";
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";
import bg1 from "../../assets/images/image5.jpg";
import img1 from "../../assets/images/bg-landing.jpg";
import img2 from "../../assets/images/image9.jpg";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    <Loading />;
  }, []);

  /// Set of sections on the HomePage
  const sections = [
    {
      id: 1,
      img: img1,
      tittle: "Coworkings",
      subtittle: "¡Coworkings a tu necesida y gusto!",
      flipped: false,
      color: "one",
    },
    {
      id: 2,
      img: img2,
      tittle: "Cafés",
      subtittle: "¡Cafés de tu agrado!",
      flipped: true,
      color: "two",
    },
  ];

  return (
    <div className="my_home">
      <Hero className="hero__section" imgSrc={bg1} />
      {sections.map((sec) => (
        <div key={sec.id} className={`slider__section__${sec.color}`}>
          <Slider
            imageSrc={sec.img}
            tittle={sec.tittle}
            subtittle={sec.subtittle}
            flipped={sec.flipped}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
