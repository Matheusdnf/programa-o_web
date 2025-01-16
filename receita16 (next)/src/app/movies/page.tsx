import Image from "next/image";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

const transformar = (vetor: Movie) => (
  <div key={vetor.imdbID}>
    - {vetor.Title} | {vetor.Year} | --- {vetor.imdbID}
    <div>
      <Image
        src={vetor.Poster}
        alt={`Poster do filme ${vetor.Title}`}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />
    </div>
  </div>
);
//DESESTRUTURAÇÃO/*
export default async function Movies({
  searchParams,
}: {
  searchParams: { titleSearchKey: string; tipo: string };
}) {
  //DESESTRUTURAÇÃO
  const tipoSearchKey = searchParams.tipo || "movie";
  const titleSearchKey = searchParams.titleSearchKey || "bagdad";

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=9eabd38d&s=${titleSearchKey}&type=${tipoSearchKey}`
  );
  const data = await res.json();
  if (data.Search.length == 0) {
    return <p>Nenhum resultado encontrado para sua busca.</p>;
  } else {
    return <div>{data.Search.map(transformar)}</div>;
  }
}
