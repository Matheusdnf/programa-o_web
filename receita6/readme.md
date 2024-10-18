receita sobre json

JavaScript que seguem a sintaxe JavaScript Object Notation (JSON)

- Não é o objeto de nenhuma classe (Descreve os objetos diretamente(explicitando informações e métodos))
- Abre/Fecha chaves indica UM objeto
- uma liguagem e intercâmbio de informação. (objetos Leves)
- Independe da linguagem

Regras

# Regra 1:

UM abre/fecha chaves indica UM objeto, e o que está dentro do abre/fecha chaves descreve, CLARO, descreve o conteúdo do objeto.

```
{
    CÃO_CHUPANDO_MANGA
}
```

# Regra 2:

- Descreve-se o conteúdo de um objeto, SEMPRE escrevendo o nome de uma propriedade, seguido de dois pontos, seguidos do valor daquela propriedade.
- Você pode escrever o nome da propriedade entre aspas duplas, você pode não escrever entre aspas duplas.

```
{
   nome: CÃO_CHUPANDO_MANGA ,
   idade: CÃO_CHUPANDO_MANGA ,
   enderecos: CÃO_CHUPANDO_MANGA
}
```

# Regra 3:

Os valores, aqueles depois dos dois pontos, podem ser literais:

- string
- números
- booleanos
- ou outros objetos delimitados por { }.

```
{
   nome: "Chicó" ,
   idade: 27 ,
   enderecos: CÃO_CHUPANDO_MANGA
}
```

# Regra 4:

Valores também podem ser, na verdade, vetores. UM abre/fecha colchetes indica, ora vejam, UM vetor, e dentro do abre/fecha colchetes se descrevemos valores do vetor, separados, ora vejam, por vírgula.

```
{
   nome: "Chicó" ,
   idade: 27 ,
   enderecos: ["Rua da Compadecida 5, Taperoá/PB", "Rua da Padaria 19, Cabaceiras/PB"]
}
```

# Regra 5:

Os valores dentro do Json também podem ser funções, pelo fato de querendo ou não estamos falando de objetos.

```
{
   nome: "Chicó" ,
   idade: 27 ,
   enderecos: ["Rua da Compadecida 5, Taperoá/PB", "Rua da Padaria 19, Cabaceiras/PB"]
   maiorDeIdade: function(){
      return this.idade>=18
   }
}
```

## Arrya de objetos

```
[{
   nome: "Chicó" ,
   idade: 27 ,
   enderecos: ["Rua da Compadecida 5, Taperoá/PB", "Rua da Padaria 19, Cabaceiras/PB"]
   maiorDeIdade: function(){
      return this.idade>=18
   }
},

{
   nome: "João Grilo" ,
   idade: 29 ,
   enderecos: ["Rua da Compadecida 57, Taperoá/PB", "Rua da Tapa 99, Serra Branca/PB"]
   maiorDeIdade: function(){
      return this.idade>=18
   }
},

{
   nome: "Major Antônio Morais" ,
   idade: 65 ,
   enderecos: ["Rua da Fazenda sn, Taperoá/PB", "Rua da Prata 1, Campina Grande/PB"]
   maiorDeIdade: function(){
      return this.idade>=18
   }
}]
```

Escrever objetos em json com moderação, pois ficarão repetidos

# Observação

No caso do scripts em JS com páginas web, usamos a sintaxe JSON diretamente numa atribuição, já estaremos declarando objetos JavaScript e poderemos lidar com eles normalmente.

Se recebermos um texto no formato JSON de uma consulta a algum site ou banco de dados, precisamos chamar um método para fazer a conversão daquele texto em objetos JS.

o formato JSON é independente de linguagem. Qualquer biblioteca mequetrefe converte um texto no formato JSON facilmente para objetos de uma linguagem específica.

# Formas de Acessar Atributos de Objetos

# .

```
const carregarDiv = (cs) => {
      const div = document.getElementById("cervejasDiv");

      const itensHtml = cs.map(
        (item) => `<div>${item.name} -- ${item.alchol}</div>`
      );

      div.innerHTML = `${itensHtml.join("\n")}`;
    };

```

# operação de Desestruturação

Tradução do inglês, destructuring

- coloca um abre e fecha parêntese abrangendo os parâmetro.
- Listamos entre chaves as propriedades que sabemos que constam nos objetos que a arrow function recebe como parâmetro.
- Estamos arregaçando o objeto e pegando duas propriedades suas para serem usadas, dali em diante, como variáveis independentes, SEM a necessidade do dot notation.

```
      const carregarDiv = cs => {
         const div = document.getElementById("cervejasDiv")
         const itensHtml = cs.map( ({name,alcohol}) => `<div>${name} -- ${alcohol}</div>` )
         div.innerHTML = `${itensHtml.join("\n")}`
      }
```

Acessando as propriedades indexando o objeto com um string representando o nome da propriedade (ora com 'name', ora com 'alcohol'. É parecido com o que fazemos com arrays, sendo que em vez de passar um inteiro como índice, acessa com o nome da propriedade do objeto.

```
 const carregarDiv = (cs) => {
      const div = document.getElementById("cervejasDiv");

       const itensHtml = cs.map(
        (item) => `<div>${item["name"]} -- ${item["alcohol"]}</div>`
      );

      div.innerHTML = `${itensHtml.join("\n")}`;
    };
```
