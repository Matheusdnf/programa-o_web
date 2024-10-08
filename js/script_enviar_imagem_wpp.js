//imagem é um vetor de imagens
//quantidade:número de vezes que a imagem será enviada
//assync pois está esperando a resposta da função
async function enviarImagens(imagens, quantidade) {
  const main = document.querySelector("#main");
  const inputFile = main.querySelector('input[type="file"]');

  // Loop para enviar cada imagem a quantidade especificada de vezes
  //arquivo que será upado
  for (const arquivo of imagens) {
    for (let i = 0; i < quantidade; i++) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(arquivo);
      inputFile.files = dataTransfer.files;

      // Simular o evento de mudança
      const changeEvent = new Event("change", { bubbles: true });
      inputFile.dispatchEvent(changeEvent);

      // Aguardar um pouco para garantir que o arquivo seja processado
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  // Enviar todas as imagens de uma vez
  for (let i = 0; i < imagens.length * quantidade; i++) {
    enviarComEnter(); // Chama a função para simular Enter e clicar
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Tempo entre envios
  }

  return imagens.length * quantidade; // Retorna o total de imagens enviadas
}

// Função para simular o pressionamento da tecla Enter e clicar no botão de enviar
function enviarComEnter() {
  // Seleciona o botão de enviar
  const botaoEnviar = document.querySelector('div[aria-label="Enviar"]');

  if (botaoEnviar) {
    // Cria o evento de teclado para simular a tecla "Enter"
    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      charCode: 13,
      keyCode: 13,
      which: 13,
      bubbles: true,
    });

    // Despacha o evento no botão
    botaoEnviar.dispatchEvent(enterEvent);

    // Simula o foco e clica no botão
    botaoEnviar.focus();
    botaoEnviar.click(); // Clica no botão
  }
}

// Função para selecionar imagens do computador
function selecionarImagens(quantidade) {
  const inputFile = document.createElement("input");
  inputFile.type = "file";
  inputFile.multiple = true;
  inputFile.accept = "image/*";

  inputFile.onchange = async (event) => {
    const imagens = Array.from(event.target.files);
    // Envia as imagens apenas depois de todas carregadas
    const numImagens = await enviarImagens(imagens, quantidade);
    console.log(`Código finalizado, ${numImagens} imagens enviadas`);
  };

  inputFile.click(); // Simula o clique para abrir o seletor de arquivos
}

// Inicia o processo de seleção de imagens com a quantidade desejada
const quantidadeDeEnvios = 10; // Altere este valor conforme necessário
selecionarImagens(quantidadeDeEnvios);
