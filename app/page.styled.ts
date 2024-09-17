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
  flex: 0 1 auto;
`;
