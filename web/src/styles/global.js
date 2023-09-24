import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

        color: ${({ theme }) => theme.body.text};
        background-color: ${({ theme }) => theme.body.background};
    }

    button, a {
        cursor: pointer;
    }
`