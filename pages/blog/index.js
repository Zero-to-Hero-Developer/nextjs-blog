import Button from "../../components/Button";
import Layout from "../../components/Layout";
import styled from "styled-components";

const blogContents = [
  {
    href: "gunluk-1",
    title: "Günlük yazı 1",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    href: "gunluk-2",
    title: "Günlük yazı 2",
    text: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
  },
];

const H2 = styled.h2`
  margin: 0;
`;

const BlogDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
`;

const BlogWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 10px;
`;

export default () => (
  <Layout title="Blog">
    Burada yazılar yer alacak
    <BlogWrapper>
      {blogContents.map((item, index) => (
        <BlogDiv key={index}>
          <H2>{item.title}</H2>
          <p>{item.text}</p>
          <Button href={`/blog/${item.href}`}>Devamı</Button>
        </BlogDiv>
      ))}
    </BlogWrapper>
  </Layout>
);
