import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  border: 10px solid #f00;
  padding: 30px;
  background-color: #f00;
  display: flex;
  gap: 20px;

  & > span {
    font-size: 30px;
  }
`;

const StyledA = styled.a`
  color: #fff;
  text-decoration: none;
  border: ${({ borderSize }) => `${borderSize}px`} solid yellow;
  font-size: ${({ big }) => (big ? "20px" : "12px")};
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <HeaderDiv>
    <Link href="/" passHref>
      <StyledA borderSize={20}>Ana Sayfa</StyledA>
    </Link>

    <Link href="/about" passHref>
      <StyledA borderSize={10} big>
        Hakkımızda
      </StyledA>
    </Link>

    <span>Ek açıklamalar</span>
  </HeaderDiv>
);
