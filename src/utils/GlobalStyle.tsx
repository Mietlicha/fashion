import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
    box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: 'Josefin Sans';
    }
`;

export default GlobalStyle;
