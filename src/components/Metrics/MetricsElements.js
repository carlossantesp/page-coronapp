import styled from "styled-components";

export const MetricsSection = styled.section`
  background-color: ${({ theme }) => theme.colorBgAccent};
  margin: 0 -1rem;
  padding: 2.5rem 1rem;
  position: relative;
  z-index: -2;
  @media screen and (min-width: 768px) {
    padding: 3.75rem 1rem;
    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: ${({ theme }) => theme.colorPrimary};
      z-index: -1;
      width: 6rem;
      height: 6rem;
      border-radius: 1.875rem;
      top: 1.5rem;
      left: 50%;
      transform: translateX(-80%) rotate(15deg);
    }
  }
  @media screen and (min-width: 992px) {
    margin: 0 -3.5rem;
  }
`;
export const MetricsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  ${({ theme }) => theme.mixins.flexColumn};
  border-radius: 1rem;
  padding: 1.75rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media screen and (min-width: 768px) {
    flex-direction: initial;
    max-width: 660px;
    margin: 0 auto;
    position: relative;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: ${({ theme }) => theme.colorPrimary};
      z-index: -1;
    }
    &::before {
      bottom: -1rem;
      left: -1.5rem;
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      transform: rotate(60deg);
    }
    &::after {
      top: 0;
      right: -1.5rem;
      width: 8rem;
      height: 8rem;
      border-radius: 1.85rem;
      transform: rotate(60deg);
    }
  }
  @media screen and (min-width: 992px) {
    &::after {
      right: -3rem;
    }
  }
`;
export const MetricItem = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
  font-weight: ${({ theme }) => theme.fontBold};
  ${({ theme }) => theme.mixins.flexColumn};
  &:last-child {
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;
export const MetricNumber = styled.h3`
  font-size: ${({ theme }) => theme.sizeBig};
  color: ${({ theme }) => theme.colorPrimary};
  line-height: ${({ theme }) => theme.lineHMediumTitle};
`;
export const MetricInfo = styled.p`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizeSmaller};
  line-height: ${({ theme }) => theme.lineHNormalTitle};
  letter-spacing: 3.7px;
`;
