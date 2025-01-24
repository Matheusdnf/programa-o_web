
//página que será renderizada no navegador/esta visível e renderizado no mesmo
//Todos os componentes do react/next são por default server components

"use client";
import { useState } from "react";
import Form from "next/form";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);

  async function handleAction(formData) {
    //evitar que o formulário fique se recarregando
    const titleSearchKey = formData.Get("titleSearchKey");
    const httpsres = await fetch(
      http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}
    );
    const resp = await httpsres.json();
    setResultMovies(resp.Search || []);
  }
  return (
    <div>
      {/* o formulário recebe a função da requizição */}
      <MovieForm handleAction={handleAction} />

      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({ handleAction }) {
  //função de manipulação
  //essa função enxerga tudo da função MovieForm - acessar todos os parâmetros (quando a função de manipulação é feita na função
  //mais baixa)

  //ESSA FUNÇÃO DEVE RECEBER UM PARÂMETRO (SEM EVENTO)
  //EXEMPLO DE UTILIZAÇÃO
  //   function handleAction(formData) {
  //     console.log(formData.get("titleSearchKey"));
  //   }

  return (
    <Form action={handleAction}>
      <label>Nome do Filme</label>
      <input id="idTitleSearchKey" name="titleSearchKey" />
      <button type="submit">Pesquisar</button>
    </Form>
  );
}

export function MovieTable({ movies }) {
  return (
    <div>
      <div>
        {movies.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
          </div>
        ))}
      </div>
    </div>
  );
}