"use client";
import { useState } from "react";
import { card } from "./styles/card.module.css";
import container from "./styles/card.module.css";
import formStyle from "./styles/form.module.css";
export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [titleSearchKey, setTitleSearchKey] = useState(""); // Estado para a chave de pesquisa
  const [buttonpress, Setbuttonpress] = useState(false);

  async function handleAction(event) {
    //impede que o formulário fique se recarregando
    event.preventDefault();
    try {
      //botão desativa
      Setbuttonpress(true);
      const httpsres = await fetch(
        `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
      );
      const resp = await httpsres.json();
      setResultMovies(resp.Search || []); // Define os filmes no estado
    } catch (error) {
      return <h1>Erro ao Pesquisar o filme</h1>;
    } finally {
      //botão ativa
      Setbuttonpress(false);
    }
  }

  return (
    <div>
      <MovieForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        buttonpress={buttonpress}
      />

      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({
  handleAction,
  titleSearchKey,
  setTitleSearchKey,
  buttonpress,
}) {
  return (
    <form onSubmit={handleAction}>
      <label className={formStyle.label}> Nome do Filme</label>
      <input
        className={formStyle.input}
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        //pegar toda a mudança no caracter
        onChange={(e) => setTitleSearchKey(e.target.value)}
      />
      <button className={formStyle.button} type="submit" disabled={buttonpress}>
        {buttonpress ? "Pesquisando" : "Pesquisar"}
      </button>
    </form>
  );
}

export function MovieTable({ movies }) {
  if (movies.length === 0) {
    return <h3>Nenhum Filme Encontrado</h3>;
  }
  return (
    <div className={container.container}>
      {movies.map((m) => (
        <div key={m.imdbID} className={card}>
          <h4>
            {m.Title} --- {m.Year}
          </h4>
          <img
            //!== compara o valor e retorna um booleano
            src={m.Poster !== "N/A" ? m.Poster : "./img/invalid.jpg"}
            alt={m.Title}
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
