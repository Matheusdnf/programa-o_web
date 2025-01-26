"use client";
import Form from "next/form";
import { useState } from "react";
import { searchMovies } from "../actions/movieActions";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);

  async function handleAction(formData) {
    const res = await searchMovies(formData);
    setResultMovies(res);
  }

  return (
    <div>
      <MovieForm actionHandler={handleAction} />

      {resultMovies.Search && <MovieTable movies={resultMovies.Search} />}
    </div>
  );
}

export function MovieForm({ actionHandler }) {
  return (
    <Form action={actionHandler}>
      <label htmlFor="idTitleSearchKey">Título</label>

      <input id="idTitleSearchKey" name="titleSearchKey" />

      <label htmlFor="idTitleYear">Ano do filme</label>

      <input id="idTitleYear" name="titleyear" type="number"></input>

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
