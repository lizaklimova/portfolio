import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --accent-color: #9952F4;
    /* --text-color: #271F19; */
    --text-color: #ffffff;
    /* --background-color: #eae7e7; */
    --grey-color: #A6A6A6;
    --background-color: #000;
    --backdrop-color: rgba(0, 0, 0, 0.5);
    --eased-transition: 150ms ease-in-out;
    --cubic-transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--text-color);
    background-color: var(--background-color);
    overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 7px;
} 

::-webkit-scrollbar-thumb {
  background-color: var(--accent-color);
  border-radius: 7px;
}

::-webkit-scrollbar-track {
   background-color: var(--background-color);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
 

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
}
`;

export default GlobalStyles;
