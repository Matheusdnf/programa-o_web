# Utilização de API online

Nesta receita será abordado o consumo de dados online

# API

É um texto, uma string, se você preferir. Mas é um texto que segue as regras de formatação do JSON, a qual pode ser convertido num vetor de objetos JSON para nosso script manipular.

# Fetch

retorna imediatamente SEM o resultado da requisição (fica esperando o resultado)

- Manipulação de pedidos e respostas.
- buscar recursos de forma assíncrona através da rede.
- Retorna um objeto do tipo response (respostas da requisição HTTPS)
- função que faz processamento assíncrono.
  retorna imediatamente um objeto SEM o valor de resposta da requisição

## objeto Response tem um método que é capaz de converter o corpo da resposta em objetos JSON.

```
let objetos = await res.json()
```

O async/await é uma nova forma de tratar Promises dentro do nosso código, evitando a criação de cascatas de .then

# await/assync

- só pode ser utilizado em funções assícronas (esperar o retorno de uma promisse (eventual conclussão ou falha de uma operação assícrona (valor não conhecido)) )
  await a gente tem que usar porque o fetch é uma função que faz processamento assíncrono.

* utilizar try e catch para verificar o erro ao realizar a requisição da api e a partir disso denselver método para lidar com os mesmo
