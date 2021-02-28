import styled from "styled-components";

export const CardContent = styled.article`
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 2.25rem 1.25rem;
  max-width: 17rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colorBg};
  border-radius: 0.5rem;
  &:nth-child(2n) {
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    padding: 2rem 0.5rem;
  }
  @media screen and (min-width: 992px) {
    &:nth-child(2n + 1) {
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 4rem;
        height: 4rem;
        z-index: -1;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.colorPrimary};
      }
    }
    &:nth-child(1) {
      &::before {
        bottom: -1.5rem;
        left: -1rem;
        transform: rotate(60deg);
      }
      &::after {
        top: 3rem;
        right: -2rem;
        border-radius: 1.25rem;
        transform: scale(1.5) rotate(105deg);
      }
    }
    &:nth-child(3) {
      &::before {
        bottom: 0.75rem;
        left: -1rem;
        transform: scale(2) rotate(60deg);
      }
      &::after {
        top: -2rem;
        right: -1rem;
        transform: rotate(60deg);
      }
    }
  }
`;
export const CardIcon = styled.div`
  color: ${({ theme }) => theme.colorPrimary};
  margin-bottom: 3.75rem;
`;
export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizeBase};
  margin-bottom: 0.375rem;
`;
export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.sizeSmall};
  color: ${({ theme }) => theme.colorTextAccent};
  letter-spacing: 0.8px;
`;
