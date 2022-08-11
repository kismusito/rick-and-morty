import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(100% / 5);
  height: 300px;
  position: relative;

  @media screen and (max-width: 1400px) {
    width: calc(100% / 4);
  }

  @media screen and (max-width: 1200px) {
    width: calc(100% / 3);
  }

  @media screen and (max-width: 900px) {
    width: calc(100% / 2);
  }

  @media screen and (max-width: 600px) {
    width: calc(100% / 1);
  }
`;
