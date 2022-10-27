import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <StyledLink borderSize={2}>{children}</StyledLink>
    </Link>
  );
};
