import styled from "styled-components";

export const SliderWrapper = styled.div`
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  box-shadow: ${({ theme }) => theme.shadowPhone};
  border-radius: 1rem;
  width: 17.5rem;
  margin: 0 auto;
  padding: 0.5rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 40px;
    left: -20px;
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 1.25rem;
    background-color: ${({ theme }) => theme.colorPrimary};
    z-index: -1;
  }
  @media screen and (min-width: 768px) {
    width: 18.5rem;
    &::before {
      top: 50px;
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 1.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    width: 22rem;
    border-width: 3px;
    &::before {
      top: 60px;
      left: -26px;
      width: 9.375rem;
      height: 9.375rem;
      border-radius: 1.875rem;
    }
  }
`;
export const SliderContent = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  padding: 1rem;
  overflow: hidden;
`;
export const SliderItem = styled.div`
  padding: 4.2rem 0;
  transition: all 0.25s;
  transform: ${({ current }) => (current ? "translate(0)" : "translate(100%)")};
  @media screen and (min-width: 768px) {
    padding: 4rem 0;
  }
`;
export const SliderImageWrapper = styled.div`
  margin: 0 1.3rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 11px 12px rgba(50, 50, 71, 0.4);
  @media screen and (min-width: 768px) {
    margin: 0 1rem;
  }
  @media screen and (min-width: 992px) {
    margin: 0 1.5rem;
  }
`;
export const SliderImage = styled.img`
  width: 100%;
  display: block;
`;
export const SliderTitle = styled.h3`
  font-size: 1.375rem;
  margin-top: 1.5rem;
  line-height: ${({ theme }) => theme.lineHNormalTitle};
  @media screen and (min-width: 768px) {
    font-size: 1.625rem;
    line-height: 1.2;
  }
`;
export const SliderDescription = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.34px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colorTextAccent};
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
    line-height: 18px;
  }
`;

export const SliderOptions = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
`;
export const SliderButton = styled.button`
  border: none;
  cursor: pointer;
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.25rem;
  background-color: #e4e4e4;
  border-radius: 50%;
  &.active {
    background-color: ${({ theme }) => theme.colorPrimary};
  }
  @media screen and (min-width: 768px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
