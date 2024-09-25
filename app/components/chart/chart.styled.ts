import styled from "styled-components";

export const ChartWrapper = styled.div`
  position: relative;
  width: 24rem;
  height: 24rem;
  margin: 0 auto;
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
`;
