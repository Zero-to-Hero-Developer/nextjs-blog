import Header from "./Header";
import styled from "styled-components";

const BodyDiv = styled.div`
  margin: 0;
  padding: 0;
`;

const Footer = styled.footer`
  background-color: #000;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const Content = styled.div`
  padding: 20px;
`;

const H1 = styled.h1`
  padding: 20px;
`;

export default ({ title, children }) => (
  <BodyDiv>
    <Header />
    <H1>{title}</H1>
    <Content>{children}</Content>
    <Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by vercel
      </a>
    </Footer>
  </BodyDiv>
);
