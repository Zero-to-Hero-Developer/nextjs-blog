import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #333;
    color: #fff;
    a {
      color: #fff;
      text-decoration: none;
      &:hover{
        color: rgba(255, 255, 255, 0.7)
      }
    }
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
