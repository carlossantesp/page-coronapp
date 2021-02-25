import React from "react";
import {
  MetricsSection,
  MetricsWrapper,
  MetricItem,
  MetricNumber,
  MetricInfo,
} from "./MetricsElements";
const Metrics = ({ metrics }) => {
  const { users, countries, doctors } = metrics;

  return (
    <MetricsSection>
      <MetricsWrapper>
        <MetricItem>
          <MetricNumber>{users}</MetricNumber>
          <MetricInfo>Usuarios</MetricInfo>
        </MetricItem>
        <MetricItem>
          <MetricNumber>{countries}</MetricNumber>
          <MetricInfo>Países</MetricInfo>
        </MetricItem>
        <MetricItem>
          <MetricNumber>{doctors}</MetricNumber>
          <MetricInfo>Expertos Medicos</MetricInfo>
        </MetricItem>
      </MetricsWrapper>
    </MetricsSection>
  );
};

export default Metrics;
