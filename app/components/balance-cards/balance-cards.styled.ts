import styled from "styled-components";

export const BalanceCardsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.2rem;

  @media screen and (min-width: 42rem) {
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (min-width: 50rem) {
    gap: 2.4rem;
  }
`;

export const BalanceCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 1.2rem;
  width: clamp(20rem, 98%, 42rem);

  @media screen and (min-width: 42rem) {
    padding: 2.4rem;
  }

  @media screen and (min-width: 50rem) {
    width: clamp(30rem, 98%, 34rem);
  }
`;

export const CardText = styled.p`
  color: #696868;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const CardAmount = styled.span`
  color: #201f24;
  font-size: 3.2rem;
  font-weight: 700;
`;
