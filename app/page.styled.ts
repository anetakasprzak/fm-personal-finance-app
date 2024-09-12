import styled from "styled-components";

export const Container = styled.div`
  background-color: pink;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 69rem) {
    flex-direction: row;
  }
`;
