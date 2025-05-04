import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: ${props => props.theme.colors.background};
}

a {
    text-decoration: none;
    cursor: pointer;
}

p,
a,
li {
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.text};
    margin: 0px;
    margin-top: 3px;
    text-align: center;
}

`;

export default GlobalStyles;