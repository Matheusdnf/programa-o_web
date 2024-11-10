// Variáveis para controlar o carregamento dos itens
let quantidadeAtual = 0;
let carregando = false; // Para evitar múltiplas requisições simultâneas

//classe criada para pegar apenas os itens que eu quero da requizição da api
class cartao {
  constructor(title, author, genre, isbn) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
  }
  toObject() {
    return {
      title: this.title,
      author: this.author,
      genre: this.genre,
      isbn: this.isbn,
    };
  }
}

async function requizicao_api(link, quantidade) {
  try {
    //link personalizado para definir a quantidade
    const url = `${link}?_quantity=${quantidade}`;
    const resposta = await fetch(url);

    //verificar se o link está no ar
    if (!resposta.ok) {
      return alert("Site fora do ar");
    }
    // Converter para JSON
    const dados = await resposta.json();

    //console.log(dados);
    //console.log(dados.status);

    //fazendo o map dos dados pegos da api
    const cabecalho = dados.data.map(
      (item) => new cartao(item.title, item.author, item.genre, item.isbn)
    );
    //console.log(cabecalho);

    //verificar se a api esta formatada corretamente
    if (dados.data) {
      carregarTabela(dados.data, cabecalho);
    } else {
      alert("Dados não encontrados.");
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar dados");
  }
}

// Função para obter a quantidade inicial de itens do input
// Parseint tranforma uma string em número inteiro
//parseInt(string,quantidade de casas)
const obterQuantidade = () =>
  parseInt(document.getElementById("resposta").value, 10);

//função addevent irá mostrar assim que a página for carregada os botões e as coisas que eu coloquei
//a função DOMcontentLoaded é para assim que carregar o site exibir o ocmponente
document.addEventListener("DOMContentLoaded", () => {
  requizicao_api("https://fakerapi.it/api/v2/books", 1);
});

// Função para filtrar apenas a primeira coluna
const filtrarTabela = (dados, termoFiltro) => {
  const termo = termoFiltro.toLowerCase(); // Ignora maiúsculas/minúsculas

  // Itera sobre todas as linhas da tabela
  document.querySelectorAll(".tabela-linha").forEach((linha) => {
    const primeiraCelula = linha.querySelectorAll(".tabela-celula")[0]; // Pega a primeira célula da linha
    const textoCelula = primeiraCelula.textContent.toLowerCase(); // Conteúdo da primeira célula

    // Se a primeira célula contiver o termo de busca, exibe a linha, senão oculta
    if (textoCelula.includes(termo)) {
      linha.style.display = ""; // Exibe a linha
    } else {
      linha.style.display = "none"; // Oculta a linha
    }
  });
};

// Função para destacar texto na tabela
const Destacar_texto = (dados, termoFiltro) => {
  const termo = termoFiltro.toLowerCase(); // Ignora maiúsculas/minúsculas

  // Se o termo de pesquisa for vazio, remove o destaque
  document.querySelectorAll(".tabela-celula").forEach((celula) => {
    celula.classList.remove("destaque"); // Remove qualquer destaque existente
  });

  if (termo.length < 1) return; // Se o termo for vazio, não faz nada

  // Itera sobre todas as células para verificar se o conteúdo contém o termo de destaque
  document.querySelectorAll(".tabela-celula").forEach((celula) => {
    const textoCelula = celula.textContent.toLowerCase(); // Conteúdo da célula
    if (textoCelula.includes(termo)) {
      celula.classList.add("destaque"); // Adiciona o destaque na célula
    }
  });
};

//pega o primeiro caracter da letra deixa em M
//divide a palavra a partir do segundo caracter e coloca em minuscula
//depois soma as duas alterações
const primeira_letra_M = (letra) =>
  letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();

const carregarTabela = (cs, cabecalho) => {
  const div = document.getElementById("conteudo");
  // Criar o cabeçalho da tabela com base no vetor cabecalho
  //pega as chaves do objeto e retornar em vetor
  const chaves = Object.keys(cabecalho[0].toObject());

  const cabecalhoHtml = `<tr>
      ${chaves
        .map(
          (item) =>
            `<th>${
              //chart retornar a letra no indice mendiconado, o slice pegar a letra após a prim
              primeira_letra_M(item)
            }</th>`
        )
        .join("")}
  </tr>`;
  //console.log(cabecalhoHtml);

  //FORMA PADRÃO
  //   // Criar o cabeçalho da tabela com base nas propriedades da classe Cartao
  //   const cabecalhoHtml = `
  //   <tr>
  //     <th>Title</th>
  //     <th>Author</th>
  //     <th>Genre</th>
  //     <th>ISBN</th>
  //   </tr>
  // `;

  const itensHtml = cs
    .map(
      (item) => `
        <tr class="tabela-linha">
            ${
              // o $ está interpolando os valores
              chaves
                .map((chave) => {
                  // Para cada chave, acessar o valor correspondente no item de cs
                  return `<td class="tabela-celula">${
                    item[chave] || "Desconhecido"
                  }</td>`;
                })
                .join("")
            }
        </tr>
      `
    )
    .join("");

  // Exibe a tabela
  div.innerHTML += `<table>${cabecalhoHtml}${itensHtml}</table>`; // Acrescenta ao invés de sobrescrever

  // Adicionar evento de filtragem
  const campoFiltro = document.getElementById("campoFiltro");
  campoFiltro.addEventListener("input", () =>
    filtrarTabela(cs, campoFiltro.value)
  );

  // Adicionar evento para destaque de texto
  const campoDestaque = document.getElementById("destaque");
  campoDestaque.addEventListener("input", () =>
    Destacar_texto(cs, campoDestaque.value)
  );
};

// Função que vai verificar a rolagem e carregar mais dados
const verificarScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const bottomPosition = document.documentElement.scrollHeight;

  // Verifica se o usuário chegou ao fim da página
  if (scrollPosition >= bottomPosition - 50 && !carregando) {
    carregando = true; // Bloqueia novas requisições enquanto carrega
    carregarMaisItens();
  }
};

// Função para carregar mais itens com base na quantidade
const carregarMaisItens = () => {
  const quantidadeInput = obterQuantidade(); // Obtém a quantidade do input

  // Verifica se a quantidade é válida (se for um número e maior que zero)
  if (!isNaN(quantidadeInput) && quantidadeInput > 0) {
    // Adiciona mais itens ao carregar
    quantidadeAtual += quantidadeInput;

    requizicao_api(
      "https://fakerapi.it/api/v2/books", // URL da API
      quantidadeAtual // Quantidade de itens
    );
  } else {
    alert("Por favor, insira uma quantidade válida.");
  }

  // Marca o fim do carregamento
  setTimeout(() => {
    carregando = false;
  }, 500); // Aguarda 500ms para permitir outra requisição
};

// Evento de clique no botão para disparar a requisição inicial
let bt_cartao = document.getElementById("botaoCartao");

bt_cartao.addEventListener("click", (event) => {
  const div = document.getElementById("conteudo");
  //retornar um conteúdo em branco para a api
  div.innerHTML = " ";
  event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

  const quantidade = obterQuantidade(); // Obtém a quantidade do input

  // Verifica se a quantidade é válida (se for um número e maior que zero)
  if (!isNaN(quantidade) && quantidade > 0) {
    quantidadeAtual = quantidade; // Inicia com a quantidade fornecida pelo usuário
    requizicao_api(
      "https://fakerapi.it/api/v2/books", // URL da API
      quantidade // Quantidade de itens
    );

    // Configura o evento de rolagem
    window.addEventListener("scroll", verificarScroll);
  } else {
    alert("Por favor, insira uma quantidade válida.");
  }
});
