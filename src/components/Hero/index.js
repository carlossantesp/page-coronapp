import React from "react";
import {
  HeroWrapper,
  HeroInformation,
  HeroImageWrapper,
  HeroImage,
  HeroVideoWrapper,
} from "./HeroElements";
import { BsVideo } from "../../icons/basics";
import Information from "../Information";
import logoHero from "../../assets/images/doctor.png";

const Hero = () => {
  const data = {
    title: "Cuida la salud de tu familia.",
    description:
      "Todo en un destino para consultas de salud de COVID-19. Consulte a más de 10,000 trabajadores de la salud sobre sus inquietudes.",
    buttonLabel: "Empiezar",
    buttonLink: "/",
  };

  return (
    <HeroWrapper>
      <HeroInformation>
        <Information data={data} />
      </HeroInformation>
      <HeroImageWrapper>
        <HeroImage src={logoHero} alt="Doctor and girl" />
      </HeroImageWrapper>
      <HeroVideoWrapper>
        <BsVideo /> Ver Vídeo
      </HeroVideoWrapper>
    </HeroWrapper>
  );
};

export default Hero;
