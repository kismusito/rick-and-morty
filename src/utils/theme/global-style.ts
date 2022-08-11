import { createGlobalStyle } from "styled-components";
import "typeface-roboto";
import { ThemeType } from ".";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: roboto;
        overflow-x: hidden;
        background-color: ${(props) => props.theme.colors.background};
        padding-top: 60px;
    }
`;
