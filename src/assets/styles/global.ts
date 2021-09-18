import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    :root {
        --Very-dark-blue: #0f1424;
        --Dark-blue: #1c1f4a;
        --Pale-Blue: rgba(189,193,255,0.5);
        --Text-active-color: #ffffff;
        --Background-Blue: #5847eb;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        background: var(--Very-dark-blue);
        font-family: 'Rubik', sans-serif;
        font-size: 18px;

        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    a{
        cursor: pointer;
    }
`;