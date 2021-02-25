import React from "react";
import Hero from "../Hero";
import Feature from "../Feature";
import Metrics from "../Metrics";

const Main = ({ services, metrics, sliderInfo }) => {
  return (
    <main>
      <Hero />
      <Feature sliderInfo={sliderInfo} />
      <Metrics metrics={metrics} />
    </main>
  );
};

export default Main;
