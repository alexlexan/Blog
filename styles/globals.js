import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ${(props) =>
    props.themeDark
      ? `:root {
    --bg: #fff;
    --bg-secondary: #f9fafb;
    --pink: #ffa7c4;
    --textNormal: #222;
    --textTitle: #222;
    --textLink: #d23669;
    --hr: rgba(0,0,0,0.2);
    --inlineCode-bg: rgba(255,229,100,0.2);
    --inlineCode-text: #1a1a1a;
  }`
      : `:root{
    --bg: #282c35;
    --bg-secondary: #363c48;
    --header: #fff;
    --textNormal: hsla(0,0%,100%,0.97);
    --textTitle: #fff;
    --textLink: var(--pink);
    --hr: hsla(0,0%,100%,0.2);
    --inlineCode-bg: rgba(115,124,153,0.2);
    --inlineCode-text: #e6e6e6;
    --form-shadow: 0 2px 15px 0 rgba(26,26,27,0.637);
}`}
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    min-height: 500px;
    min-width: 800px;
    font: 100%/1.75 'Merriweather','Georgia',serif;
    font-weight: 400;
  }
  body {
    background: var(--bg);
    font-weight: 400;
    color: var(--textNormal);
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 900;
    font-family: "Montserrat",sans-serif;
  }
  p {
    font-size: 16px
  }
  a {
    box-shadow: 0 1px 0 0 currentColor;
    color: var(--textLink);
    text-decoration: none;
  }
  h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    color: inherit;
    font-family: 'Merriweather','Georgia',serif;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    font-size: 1.4427rem;
    line-height: 1.1;
  }

  
`;
