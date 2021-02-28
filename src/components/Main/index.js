import React from "react";
import Hero from "../Hero";
import Feature from "../Feature";
import Metrics from "../Metrics";
import Expert from "../Expert";
import Attentions from "../Attentions";
import { MainPrimary, MainAlt } from "./MainElements";

const Main = ({ services, metrics, sliderInfo }) => {
  return (
    <main>
      <MainPrimary>
        <Hero />
        <Feature sliderInfo={sliderInfo} />
      </MainPrimary>
      <MainAlt>
        <Metrics metrics={metrics} />
        <Expert />
      </MainAlt>
      <MainPrimary>
        <Attentions attentions={services} />
      </MainPrimary>
    </main>
  );
};

export default Main;
