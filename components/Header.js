import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  background-color: #000;
`;

const HeaderInner = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 30px;
  display: flex;
  gap: 20px;
`;

export default () => (
  <HeaderDiv>
    <HeaderInner>
      <Button href="/">Ana Sayfa</Button>
      <Button href="/about">Hakkımda</Button>
      <Button href="/blog">Blog</Button>
      <Button href="/contact">İletişim</Button>
    </HeaderInner>
  </HeaderDiv>
);
