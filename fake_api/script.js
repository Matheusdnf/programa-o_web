async function requizicao_api(link, cabecalho) {
  try {
    const res = await fetch(link);
    if (!res.ok) {
      return alert("Site fora do ar");
    }
    const data = await res.json();
    
    // Verifica se os dados têm o formato esperado
    if (data.data) {
      carregarTabela(data.data, cabecalho);
    } else {
      alert("Dados não encontrados.");
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar dados");
  }
  document.getElementById("botaoCartao").disabled = true; 
  setTimeout(document.getElementById("botaoCartao").disabled = false,3000 )
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

let bt_cartao = document.getElementById("botaoCartao"); 



bt_cartao.addEventListener("click", () =>
  requizicao_api(
    "https://fakerapi.it/api/v2/books?_quantity=4", 
    ["title", "author", "genre", "isbn"]
  )
);
