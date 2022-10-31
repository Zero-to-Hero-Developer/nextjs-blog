import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { useRouter } from "next/router";
import Error from "next/error";
import Layout from "../../components/Layout";

export default ({ frontmatter, content }) => {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  // const router = useRouter();
  // const { slug } = router.query;

  // let foundItem = data.find((dataItem) => dataItem.slug === slug);

  // if (!foundItem) {
  //   return <Error statusCode={404} />;
  // }

  return (
    <Layout title={title}>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
