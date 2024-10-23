# Promisse

sobre a função fetch
A questão é objeto retornado pelo fetch não tem AINDA os resultados da operação, mas em algum momento futuro ele vai ter: esse objeto é o que chamamos de promessa, ou Promise , a qual o valor pode estar disponível agora, no futuro ou nunca.
Esse objeto saberá:

- Quando a promessa teve exito (requisição dos dados da api).
- Quando a promessa apresenta algum erro ou não conseguiu ser realizada com êxito.
- Apresenta um objeto que que pode receber como atributo duas funções de callback, para lidar com as respostas da requizição da API

# then

serva para fazer o tratamento das promises (tratamento de erros na requisizição ou criação de um promisse)

- recebe duas funções de callback a primeira caso a operação ocorra tudo certo e a segunda caso algo aconteça de errado
- pode ser encadeada, para ligar com várias promesas e assim criando novas promesas
