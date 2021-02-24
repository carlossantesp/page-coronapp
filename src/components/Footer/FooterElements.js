import styled from "styled-components";

export const FooterWrapper = styled.footer`
  ${({ theme }) => theme.mixins.flexColumn};
  @media screen and (min-width: 768px) {
    flex-direction: initial;
    ${({ theme }) => theme.mixins.flexCenter};
  }
`;
export const LinkApp = styled.a`
  diplay: inline-block;
  width: 9rem;
  margin: 0.25rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.25s;
  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colorTextAccent};
  }
  @media screen and (min-width: 768px) {
    width: 10rem;
    margin: 1rem;
  }
`;
export const ImageApp = styled.img`
  width: 100%;
  display: block;
`;
