import styled from "styled-components";

export const MainPrimary = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;
export const MainAlt = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colorBgAccent};
  margin: 0 -1rem;
  padding: 2.5rem 1rem 3.75rem 1rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 6.25rem;
  }
  @media screen and (min-width: 992px) {
    margin: 0 -3.5rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
`;
