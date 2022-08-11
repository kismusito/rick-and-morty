import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const CardContainerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;

  @media screen and (max-width: 1400px) {
    width: 70vw;
  }

  @media screen and (max-width: 1200px) {
    width: 60vw;
  }

  @media screen and (max-width: 900px) {
    width: 50vw;
  }

  @media screen and (max-width: 600px) {
    width: 40vw;
  }
`;
