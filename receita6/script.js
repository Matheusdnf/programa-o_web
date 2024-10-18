let cervejas = [
  {
    name: "Guiness",
    alchol: "10%",
    style: "Red Ale",
    ibu: "15",
  },

  {
    name: "Desperados",
    alchol: "50%",
    style: "English IPA",
    ibu: "50",
  },

  {
    name: "Becks",
    alchol: "100%",
    style: "Imperial Stout",
    ibu: "40",
  },
];

const carregarDiv = (cs, id, nome, alchol, style, ibu) => {
  //relação de undefined o default é "CervejasDIV"
  id = typeof id !== "undefined" ? id : "cervejasDiv";
  const div = document.getElementById(id);

  //aplicando undefined buscando evitar possíveis erros
  nome = typeof nome !== "undefined" ? id : "Nome";
  alcool = typeof alcool !== "undefined" ? Álcool : "Álcool";
  Style = typeof Style !== "undefined" ? Style : "Style";
  ibu = typeof ibu !== "undefined" ? ibu : "ibu";
  const cabecalho = `<tr>
    <th>${nome}</th>
    <th>${alcool}</th>
    <th>${Style}</th>
    <th>${ibu}</th>
    </tr>`;
  const itensHtml = cs.map(
    ({
      //método para contornar o problema caso passe váriavies que não sejam mostradas ou que batam com o valor
      name = "Nome Desconhecido",
      alchol = "Nome Desconhecido",
      style = "Nome Desconhecido",
      ibu = "Nome Desconhecido",
    }) => `<tr>
      <td>${name}</td>
      <td>${alchol}</td>
      <td>${style}</td>
      <td>${ibu}</td>
      </tr>`
  );

  div.innerHTML = `<table>${cabecalho}${itensHtml.join("")}</table>`;
};

let botao = document.getElementById("botaoCarregar");

botao.addEventListener("click", () => carregarDiv(cervejas));
