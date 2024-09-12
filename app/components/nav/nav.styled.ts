import styled from "styled-components";
import Image from "next/image";

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

  @media screen and (min-width: 69rem) {
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    width: 28rem;
    height: 100%;
    order: 1;
    border-radius: 0rem 1.6rem 1.6rem 0rem;
  }
`;

export const Logo = styled(Image)`
  display: none;

  @media screen and (min-width: 69rem) {
    display: block;
  }
`;

export const NavEl = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 69rem) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

export const NavText = styled.p`
  display: none;
  color: #b3b3b3;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 150%;

  @media screen and (min-width: 35rem) {
    display: block;
  }

  @media screen and (min-width: 69rem) {
    font-size: 1.6rem;
  }
`;

export const CloseMenuBox = styled.div`
  display: none;

  @media screen and (min-width: 69rem) {
    display: block;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const CloseMenuText = styled.p`
  color: #b3b3b3;
  font-size: 1.6rem;
  font-weight: 700;
`;
