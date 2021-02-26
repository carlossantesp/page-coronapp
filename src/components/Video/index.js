import React from "react";
import { VideoWrapper, VideoPoster } from "./VideoElements";
const Video = ({ dataVideo }) => {
  const { poster, posterAlt } = dataVideo;
  return (
    <VideoWrapper>
      <VideoPoster src={poster} alt={posterAlt} />
    </VideoWrapper>
  );
};

export default Video;
