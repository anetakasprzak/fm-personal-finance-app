import styled from "styled-components";

export const NavContainer = styled.ul`
  background-color: #201f24;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  border-radius: 0.8rem 0.8rem 0rem 0rem;

  @media screen and (min-width: 29rem) {
    padding: 0.8rem 2.8rem 0.8rem 2.8rem;
  }

  @media screen and (min-width: 35rem) {
    padding: 1rem 4rem 0.8rem 4rem;
  }
`;

export const NavEl = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const NavText = styled.p`
  display: none;
  color: #b3b3b3;
  font-size: 1.2rem;

  @media screen and (min-width: 35rem) {
    display: block;
  }
`;
