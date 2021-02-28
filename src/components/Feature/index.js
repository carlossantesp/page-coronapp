import React from "react";
import {
  FeatureWrapper,
  FeatureSlider,
  FeatureInformation,
} from "./FeatureElements";
import Information from "../Information";
import Slider from "../Slider";

const Feature = ({ sliderInfo }) => {
  const data = {
    title: "Mantente seguro con Coronapp.",
    description:
      "Soporte 24x7 y plataforma móvil fácil de usar para llevar la atención médica a su alcance. Regístrese y sea parte de la nueva cultura de la salud.",
    buttonLabel: "Empezar",
    buttonLink: "attentions",
  };
  return (
    <FeatureWrapper id="features">
      <FeatureSlider>
        <Slider sliderInfo={sliderInfo} />
      </FeatureSlider>
      <FeatureInformation>
        <Information data={data} />
      </FeatureInformation>
    </FeatureWrapper>
  );
};

export default Feature;
