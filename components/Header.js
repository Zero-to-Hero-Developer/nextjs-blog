import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  color: #f00;
  border: 10px solid #f00;
  padding: 30px;
  background-color: #f00;
`;

export default () => (
  <div>
    <HeaderDiv>
      <Link href="/" passHref>
        <a>Ana Sayfa</a>
      </Link>
    </HeaderDiv>
    <div>
      <Link href="/about" passHref>
        <a>Hakkımızda</a>
      </Link>
    </div>
  </div>
);
