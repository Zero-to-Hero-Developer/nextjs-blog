import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const MovieCard = styled.div`
  display: grid;
  gap: 10px;
  width: 200px;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  justify-content: space-between;
`;

export default function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Render oldu count ");
    fetch("https://api.sampleapis.com/movies/animation")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Layout title="Filmler">
      <MovieList>
        {data.map((item) => (
          <MovieCard key={item.id}>
            <Image
              width={200}
              height={296}
              alt={item.title}
              src={item.posterURL}
              loading="lazy"
            />
            <b>{item.title}</b>
          </MovieCard>
        ))}
      </MovieList>
    </Layout>
  );
}
