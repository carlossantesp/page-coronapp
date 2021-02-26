import styled from "styled-components";

export const ExpertWrapper = styled.section`
  display: grid;
  grid-template-areas: "information" "video";
  align-items: center;
  max-width: 400px;
  margin: auto;
  gap: 2.5rem;
  margin-top: 2.5rem;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    gap: 4rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-areas: "information video";
    grid-template-columns: 2fr 3fr;
    max-width: 100%;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
    max-width: 1100px;
  }
`;
export const ExpertInformation = styled.div`
  grid-area: information;
  text-align: center;
  a {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;
export const ExpertVideo = styled.div`
  grid-area: video;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    width: 80%;
    margin: 0;
    justify-self: flex-end;
  }
`;
