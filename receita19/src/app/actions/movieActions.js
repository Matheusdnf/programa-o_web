"use server";

//FormData - informações que seram recebidas de um formulário
export async function searchMovies(formData) {
  const titleSearchKey = formData.get("titleSearchKey");
  const titleyear = formData.get("titleyear");

  if (!titleSearchKey && !titleyear) return { Search: [] };
  try {
    const yearParam = titleyear ? `&y=${titleyear}` : "";
    const httpRes = await fetch(
      `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}${yearParam}`
    );
    const jsonRes = await httpRes.json();
    return jsonRes;
  } catch (err) {
    return { error: `Erro na requisição ${err}` };
  }
}
