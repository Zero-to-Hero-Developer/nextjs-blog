import { useRouter } from "next/router";
import Error from "next/error";
import Layout from "../../components/Layout";

const data = [
  {
    slug: "gunluk-1",
    title: "Günlük 1",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book. It has survived not only five centuries, but also
  the leap into electronic typesetting, remaining essentially unchanged. It
  was popularised in the 1960s with the release of Letraset sheets containing
  Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    slug: "gunluk-2",
    title: "Günlük 2",
    text: `Günlük yazı içeriği 2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book. It has survived not only five centuries, but also
  the leap into electronic typesetting, remaining essentially unchanged. It
  was popularised in the 1960s with the release of Letraset sheets containing
  Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];

export default ({}) => {
  const router = useRouter();
  const { slug } = router.query;

  let foundItem = data.find((dataItem) => dataItem.slug === slug);

  if (!foundItem) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={foundItem?.title}>
      <h1>{slug}</h1>
      <p>{foundItem?.text}</p>
    </Layout>
  );
};
