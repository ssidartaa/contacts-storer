import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root {
        --Modal-Background: rgba(18, 18, 20, 0.75);
        --Primary-Color: rgba(47, 25, 95, 1);
        --White: rgba(255, 255, 255, 1);
        --Gray-0: rgba(248, 249, 250, 1);
        --Gray-1: rgba(134, 142, 150, 1);
        --Gray-2: rgba(52, 59, 65, 1);
        --Gray-3: rgba(33, 37, 41, 1);
        --Gray-4: rgba(18, 18, 20, 1);
        --Sucess-1: rgba(63, 232, 100, 1);
        --Sucess-2: rgba(63, 232, 100, 0.5);
        --Negative-1: rgba(232, 63, 91, 1);
        --Negative-2: rgba(138, 0, 26, 1);
        --Negative-3: rgba(138, 0, 26, 0.5);
    }

    html, body, div, svg, button, p, h3, h1, h2, header, main, section, ul, li, input, span {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-weight: normal;
        outline: none;
        font-family: 'Fira Sans', sans-serif;
    }

    body {
        background-color: var(--Gray-4);
        color: var(--Gray-0);
    }
`;

export default Global;
