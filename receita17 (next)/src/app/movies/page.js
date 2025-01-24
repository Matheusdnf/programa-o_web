//renderização no servidor

async function FeatchMovies({ titleSearchKey = "bagdad", year = "1940" }) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=d47e94e4&s=${titleSearchKey}&y=${year}`
  );
  const data = await res.json();

  return data.Search || [];
}

//Promisse (objeto) e para acessar suas propriedade utiliza assim,coloca em { }
//Desestruturação é extrair valores seja de variáveis ou objetos para ter acesso aos seus valores
function ViewMovies({ movies }) {
  if (movies.length === 0) {
    return <h1>Não há esse filme</h1>;
  }
  return (
    <div>
      {movies.map((m) => (
        <div key={m.imdbID} style={{ marginBottom: "20px" }}>
          <h3>
            {m.Title} --- {m.Year}
          </h3>
          <img
            src={m.Poster !== "N/A" ? m.Poster : "./img/invalid.jpg"}
            alt={m.Title}
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
export default async function MoviesPage({ searchParams }) {
  const moviesresponse = await FeatchMovies(searchParams);
  return (
    <div>
      <h1>Filmes Pesquisados</h1>
      <ViewMovies movies={moviesresponse} />
    </div>
  );
}
