import { CSSProperties } from "react";
import styled from "styled-components";

export const LegendBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  @media screen and (min-width: 42em) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    height: 22rem;
  }
`;

export const LegendElement = styled.div<{
  borderColor: CSSProperties["color"];
}>`
  border-left: 5px solid ${(props) => props.borderColor};

  display: flex;
  flex-direction: column;
  padding-left: 1.2rem;

  @media screen and (min-width: 42em) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const LegendText = styled.span`
  color: #696868;
  font-size: 1.2rem;
`;

export const LegendNumber = styled.span`
  font-weight: 700;
  line-height: 150%;
  font-size: 1.4rem;
  color: #201f24;
`;
