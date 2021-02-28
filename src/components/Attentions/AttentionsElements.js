import styled from "styled-components";

export const AttentionsContent = styled.section`
  padding: 2.5rem 0;
  text-align: center;
  @media screen and (min-width: 992px) {
    padding-bottom: 4.5rem;
  }
`;
export const AttentionTitle = styled.h2`
  font-size: 2.5rem;
  line-height: ${({ theme }) => theme.lineHBigTitles};
  color: ${({ theme }) => theme.colorPrimary};
  span {
    display: block;
    color: ${({ theme }) => theme.colorText};
  }
`;
export const AttentionDescription = styled.p`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.sizeSmall};
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colorTextAccent};
`;
export const AttentionCardsWrapper = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
