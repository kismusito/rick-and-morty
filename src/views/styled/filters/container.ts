import styled from "styled-components";

export const FilterContainer = styled.div`
  position: fixed;
  z-index: 9;
  padding: 10px;
  padding-right: 30px;
  right: 0;
  width: 18vw;

  @media screen and (max-width: 1400px) {
    width: 28vw;
  }

  @media screen and (max-width: 1200px) {
    width: 38vw;
  }

  @media screen and (max-width: 900px) {
    width: 48vw;
  }

  @media screen and (max-width: 600px) {
    width: 56vw;
  }
`;
