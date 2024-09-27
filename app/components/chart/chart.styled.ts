import styled from "styled-components";

export const ChartWrapper = styled.div`
  position: relative;
  width: 24rem;
  height: 24rem;
  margin: 0 auto;
  background-color: #fff;
  width: 100%;
  margin-bottom: 1.6rem;

  @media screen and (min-width: 42em) {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const ChartLegendFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 42em) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const InsideChart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Amount = styled.span`
  font-weight: 700;
  line-height: 120%;
  color: #201f24;
  font-size: 3.2rem;
`;

export const Limit = styled.span`
  line-height: 150%;
  font-size: 1.4rem;
  color: #555;
`;
