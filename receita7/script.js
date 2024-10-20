async function requizicao_api(link, cabecalho) {
  try {
    const res = await fetch(link);
    if (!res.ok) {
      return alert("Site fora do ar");
    }
    const data = await res.json();
    carregarTabela(data, cabecalho);
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar dados");
  }
}

const carregarTabela = (cs, cabecalho) => {
  const div = document.getElementById("cervejasDiv");

  if (cs.length === 0) {
    div.innerHTML = "<p>Nenhum dado encontrado.</p>";
    return;
  }

  const cabecalhoHtml = `<tr>
          <th>${cabecalho[0]}</th>
          <th>${cabecalho[1]}</th>
          <th>${cabecalho[2]}</th>
          <th>${cabecalho[3]}</th>
      </tr>`;

  const itensHtml = cs
    .map(
      (item) => `
          <tr>
              <td>${item[cabecalho[0]] || "Desconhecido"}</td>
              <td>${item[cabecalho[1]] || "Desconhecido"}</td>
              <td>${item[cabecalho[2]] || "Desconhecido"}</td>
              <td>${item[cabecalho[3]] || "Desconhecido"}</td>
          </tr>
      `
    )
    .join("");

  div.innerHTML = `<table>${cabecalhoHtml}${itensHtml}</table>`;
};

let bt_cerveja = document.getElementById("botaoCarregar");
let bt_cafe = document.getElementById("botao_cafe");

bt_cerveja.addEventListener("click", () =>
  requizicao_api("https://random-data-api.com/api/v2/beers?size=3", [
    "name",
    "alchol",
    "style",
    "ibu",
  ])
);

bt_cafe.addEventListener("click", () =>
  requizicao_api(
    "https://random-data-api.com/api/coffee/random_coffee?size=3",
    ["blend_name", "origin", "variety", "notes"]
  )
);
