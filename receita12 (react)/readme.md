# Propriedade

No mundo das marcas, a gente chama esses valores de propriedades,valores associados a identificadores dentro da marca de abertura. Não confundi-las JAMAIS com o conteúdo que se encontra entre as marcas de abertura e fechamento

```html
<!--Duas Propriedade da Tabela!-->
<table id="tabela" border="1">
  <!--filho!-->
  <thead>
    <tr>
      <th>Nome</th>
      <th>Marca</th>
    </tr>
  </thead>
  <!--filho!-->
  <tbody>
    <tr>
      <td>Havana</td>
      <td>Engenho Anísio Santiago</td>
    </tr>
  </tbody>
</table>
```

# Passagem de Parametros

```html
const TabelaBebidas = (titulo) => { return (
<div>
  <h1>{titulo.nome}</h1>
  <table id="tabela" border="1">
    <thead></thead>
  </table>
</div>
```

o java script não sabe quantas e quais propriedade estamo passando para ele, sendo assim ele emcapsula em um objeto (react não aceita objetos como FILHO em suas marcas).

Está sendo passado para o nome de titulo a um objeto que, na verdade, vai ter DENTRO dele um atributo titulo. Então a gente começa dando um nome mais idôneo para o parâmetro da função...

# Destructurin

A gente pode arregaçar esse objeto passado como parâmetro para a função de forma a poder usar os nomes dos atributos diretamente, sem props.isso ou props.aquilo.

```Html
const TabelaBebidas = ({titulo}) => {...}
<h1>{titulo}</h1>
```

Está sendo indicado que a função recebe um objeto que tem um de seus atributos identificado por titulo. NOTE as **CHAVES**, elas fazem **TODA** a diferença. São **ELAS** que estão indicando isso!

O que acontece nessa tal desestruturação?
Informalmente, o objeto passado como parâmetro é "arregaçado", procura-se alguma propriedade titulo lá e, em ela sendo encontrada, seu valor é atribuído diretamente ao atributo titulo. Que é um string e pode ser usado diretamente...

# Filho estruturados

O inspetor de código do navegador gentilmente nos explicou que Objetos **[estruturados, estilo JSON]** não são válidos como um nó (filho) React ("Objects are not valid as a React child"). Isso porque estávamos escrevendo a expressão onde escreveríamos um nó (filho), dentro de uma marca, no caso, `<h1>`.

No entanto, no React, podemos usar objetos estruturados como propriedades para as marcas, em especial para as marcas que são componentes que nós próprios definimos, e isso é bem útil.

# Keys

ajuda ao react na hora de produzir os componentes, o que foi alterado,adicionado ou removido.

<li> usar valores únicos (quando possível)

Exemplo utilizando **ID**.

```java
  const cabecalhos = [
  { id: 1, nome: "Nome" },
  { id: 2, nome: "Marca" },
];
{cabecalhos.map((header) => (
  <th key={header.id}>{header.nome}</th>
))}
```

<li> Evitiar Utilizar valores inconstantes, que sofrem alteração contantemente, pois assim sendo perde o sentido da utilização das keys.
<li>utilizar INDEX apenas em ocasiões a qual

- ordem dos valores não são alterada
- não terá itens adicionados ou removidos
- Dados simples e estáticos
