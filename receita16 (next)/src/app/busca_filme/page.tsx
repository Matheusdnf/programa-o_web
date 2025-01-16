"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormularioFilme() {
  const [titleSearchKey, setTitleSearchKey] = useState("");
  const [tipo, setTipo] = useState("movie");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //se conecta com a rota /movies
    router.push(`/movies?titleSearchKey=${titleSearchKey}&tipo=${tipo}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="idTitleSearchKey">Título</label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey}
        onChange={(e) => setTitleSearchKey(e.target.value)}
      />
      <label htmlFor="idTipo">Tipo</label>
      <select
        id="idTipo"
        name="tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="movie">Filme</option>
        <option value="series">Série</option>
      </select>
      <button type="submit">Pesquisar</button>
    </form>
  );
}
