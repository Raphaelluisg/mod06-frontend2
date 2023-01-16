import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body, html, #root {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: var(--vh, 100vh);
        background-color: ${(props) => props.theme.darkTheme.bg};
        color: ${(props) => props.theme.darkTheme.fg};
    }
`;

const colors = {
    lightPrimary: "#1720e6",
    lightSecondary: "#8c8c8c",
    middle: "#595959",
    darkprimary: "#ffffff",
    darkSecondary: "#404040",
}

export const theme = {
    lightTheme: {
        bg: "#1720e6",
        fg: "#ffffff",
    },
    darkTheme: {
        bg: "#000000",
        fg: "#ffffff",
    },
};

export interface Theme {
    bg: string;
    fg: string;
}