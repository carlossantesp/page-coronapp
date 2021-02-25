import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-areas: "information" "video" "image";
  grid-gap: 2rem;
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
  @media screen and (min-width: 768px) {
    margin: 2.5rem auto;
  }
  @media screen and (min-width: 992px) {
    grid-template-areas: "information image" "video video";
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 100%;
    text-align: left;
    position: relative;
    z-index: 10;
    margin: 4.125rem auto;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;
export const HeroInformation = styled.div`
  grid-area: information;
  @media screen and (min-width: 992px) {
    padding-right: 4rem;
  }
`;
export const HeroImageWrapper = styled.div`
  grid-area: image;
`;
export const HeroImage = styled.img`
  width: 100%;
  display: block;
`;
export const HeroVideoWrapper = styled.div`
  grid-area: video;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.65px;
  ${({ theme }) => theme.mixins.flexCenter};
  & > svg {
    color: ${({ theme }) => theme.colorSecondary};
    margin-right: 0.75rem;
    width: 2.75rem;
    height: 2.75rem;
  }
  @media screen and (min-width: 992px) {
    justify-self: flex-start;
  }
`;
