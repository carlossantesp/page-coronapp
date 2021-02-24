import React from "react";
import Hero from "../Hero";
import Feature from "../Feature";

const Main = ({ services, metrics, sliderInfo }) => {
  return (
    <main>
      <Hero />
      <Feature sliderInfo={sliderInfo} />
    </main>
  );
};

export default Main;
