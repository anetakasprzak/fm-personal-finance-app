"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 69rem) {
    flex-direction: row;
  }
`;

export const NavContainer = styled.div`
  flex: 0 1 auto;
`;

export const ChildrenContainer = styled.div`
  flex: 0 1 100%;
  background-color: #f8f4f0;
  padding: 2.4rem 1.6rem;
  justify-content: center;

  @media screen and (min-width: 50rem) {
    padding: 3.2rem 4rem;
  }
`;

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
    width: auto;
  }
`;
