import Form from "next/form";
export default async function Formulario_filme() {
  return (
    <Form action="/app">
      <label htmlFor="idTitleSearchKey">Título</label>
      <input id="IdtitleSearchKey" name="titleSearchKey"></input>
      <button type="submit">Pesquisar</button>
    </Form>
  );
}
