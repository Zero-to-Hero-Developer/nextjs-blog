import Link from "next/link";
import Header from "./header";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  border: 10px solid yellow;
  background-color: red;
`;

export default ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <StyledHeader />
    <div style={{ padding: "20px", margin: "20px", backgroundColor: "tomato" }}>
      {children}
    </div>
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by vercel
      </a>
    </footer>
  </div>
);
