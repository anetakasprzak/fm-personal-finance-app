import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #201f24;
  width: 100%;

  align-self: flex-end;
  padding: 0.8rem 2rem 0rem 2rem;
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
    width: 25rem;
    padding: 5rem 0rem 5rem 3rem;
    height: 100%;
    order: 1;
    border-radius: 0rem 1.6rem 1.6rem 0rem;
    justify-content: space-between;
    height: 100vh;
  }

  @media screen and (min-width: 93rem) {
    width: 30rem;
  }
`;

export const Logo = styled(Image)`
  display: none;

  @media screen and (min-width: 69rem) {
    display: block;
    margin-bottom: 4rem;
  }
`;

export const NavFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 69rem) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const NavEl = styled(Link)<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#F8F4F0" : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.isActive ? "#201F24" : "#b3b3b3")};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 150%;
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  border-bottom: 4px solid transparent;
  border-radius: 0.8rem 0.8rem 0 0;
  border-bottom: ${(props) => (props.isActive ? "4px solid #277C78" : "")};
  cursor: pointer;
  transition: all 0.2s;

  svg path {
    fill: ${(props) => (props.isActive ? "#277C78" : "")};
  }

  @media screen and (min-width: 69rem) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;

    &:hover {
      color: #f2f2f2;
      svg path {
        fill: #f2f2f2;
      }
    }
  }
`;

export const NavText = styled.p`
  display: none;

  @media screen and (min-width: 35rem) {
    display: block;
  }

  @media screen and (min-width: 69rem) {
    font-size: 1.6rem;
  }
`;

export const CloseMenuBox = styled.div`
  display: none;
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.2s;

  svg {
    fill: red;
  }

  @media screen and (min-width: 69rem) {
    display: block;
    display: flex;
    color: #b3b3b3;
    align-items: center;
    gap: 2rem;
    cursor: pointer;

    &:hover {
      color: #f2f2f2;
      svg path {
        fill: #f2f2f2;
      }
    }
  }
`;

export const CloseMenuText = styled.p``;
