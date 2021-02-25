import styled from "styled-components";

export const FeatureWrapper = styled.section`
  display: grid;
  grid-template-areas: "slider" "information";
  grid-gap: 2.5rem;
  margin: 5rem auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    grid-template-areas: "slider information";
    grid-template-columns: 1fr 1fr;
    text-align: left;
    grid-gap: 1.5rem;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;
export const FeatureSlider = styled.div`
  grid-area: slider;
  text-align: center;
`;
export const FeatureInformation = styled.article`
  grid-area: information;
  @media screen and (min-width: 768px) {
    & > h2 {
      font-size: ${({ theme }) => theme.sizeBig} !important;
    }
  }
  @media screen and (min-width: 992px) {
    & > h2 {
      font-size: ${({ theme }) => theme.sizeBigest} !important;
    }
  }
`;
