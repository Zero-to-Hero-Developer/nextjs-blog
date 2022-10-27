import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  padding: 30px;
  display: flex;
  gap: 20px;
  background-color: #000;
`;

export default () => (
  <HeaderDiv>
    <Button href="/">Ana Sayfa</Button>
    <Button href="/about">Hakkımda</Button>
  </HeaderDiv>
);
