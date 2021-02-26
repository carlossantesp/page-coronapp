import React from "react";
import Information from "../Information";
import Video from "../Video";
import {
  ExpertWrapper,
  ExpertInformation,
  ExpertVideo,
} from "./ExpertElements";
import posterVideo from "../../assets/images/video.png";

const Expert = () => {
  const data = {
    title: "Habla con los expertos.",
    description:
      "Reserve citas o envíe consultas a miles de foros sobre problemas de salud y prevención contra el Corona Virus.",
    buttonLabel: "Caracteristicas",
    buttonLink: "/",
  };
  const dataVideo = {
    poster: posterVideo,
    posterAlt: "Video de expertos",
  };
  return (
    <ExpertWrapper>
      <ExpertInformation>
        <Information data={data} />
      </ExpertInformation>
      <ExpertVideo>
        <Video dataVideo={dataVideo} />
      </ExpertVideo>
    </ExpertWrapper>
  );
};

export default Expert;
