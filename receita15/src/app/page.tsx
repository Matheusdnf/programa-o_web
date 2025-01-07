import Link from "next/link";
interface Movie {
  Title: string;
  Year: String;
  // S - tipo de objeto
  // s - tipo primitivo, o que deve ser utilizado na key
  imdbID: string;
  titleSearchKey: "";
}
const transformar = (vetor: Movie) => (
  <div key={vetor.imdbID}>
    - {vetor.Title} | {vetor.Year} | --- {vetor.imdbID}
  </div>
);

async function requisicao(busca: String) {
  const titleSearchKey = busca || "bagdad";
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=9eabd38d&s=${titleSearchKey}`
  );

  const data = await res.json();
  return <div>{data.Search.map(transformar)}</div>;
}
export default function Home() {
  return (
    <div>
      <div>
        <div>{requisicao("avengers")}</div>
        <h1>Viva Santana!</h1>
        {/* Através disso vc só carregará o que for importante */}
        {/* Forma nova utilizando do link fornecido pelo react */}
        <Link href="/novarota">Rota1</Link> <br />
        <br />
        {/* Forma antiga utilizando do a para levar as próximas páginas */}
        <a href="/novarota">Rota 1, jeito antigo</a>
      </div>
    </div>
  );
}
