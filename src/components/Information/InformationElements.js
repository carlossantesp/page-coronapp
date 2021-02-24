import styled from "styled-components";

export const InformationTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizeBigest};
  font-weight: ${({ theme }) => theme.fontBold};
  line-height: ${({ theme }) => theme.lineHBigTitles};
  margin-bottom: 0.75rem;
`;
export const InformationSpan = styled.span`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
`;
export const InformationDescription = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.8px;
  line-height: ${({ theme }) => theme.lineHParagraphs};
  color: ${({ theme }) => theme.colorTextAccent};
  margin-bottom: 0.75rem;
`;
export const InformationBtn = styled.div`
  margin-bottom: 0.75rem;
  & > a {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
