import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  max-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: fixed;
  top: 0;
  z-index: 9;
`;
