import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'sans-serif';
    letter-spacing: 1px;
    font-size: 1.1rem;
}

html, body{
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: rgb(22,22,22);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .3s ease-in-out;
    position: relative;
}

body{
    padding: 30px 0;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
    color: unset;
}
`;

export default GlobalStyle;
