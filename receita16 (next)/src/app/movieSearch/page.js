import Form from "next/form";

export default async function MovieForm() {
  return (
    <Form action="/movies">
      <label htmlFor="idTitleSearchKey">Título</label>
      <input id="idTitleSearchKey" name="titleSearchKey" />

      <label htmlFor="idYear">Ano</label>
      <input id="idYear" name="year" type="number" />

      <button type="submit">Pesquisar</button>
    </Form>
  );
}
