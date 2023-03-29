import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

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
      <Button href="/">
        <Icon icon="home" />
        <span>Ana Sayfa</span>
      </Button>
      <Button href="/about">
        <Icon icon="user" />
        <span>Hakkımda</span>
      </Button>
      <Button href="/movies">Filmler</Button>
      <Button href="/blog">Blog</Button>
      <Button href="/contact">İletişim</Button>
    </HeaderInner>
  </HeaderDiv>
);
