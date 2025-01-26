Uma api nada mais é do que uma rota em um sistema Web

Diferenças

- uma rota com o nome do arquivo sendo page,tem o objetivo de ser uma tela que possa ser acessada por um usuário em seu navegador web,então precisa retornar uma página react/html, que saiba ser tranformada em interface gráfica, default retornando marcas jsx

- uma arquito routet.js leva o nome de _API ENDPOINT_, tem por objetivo servir dados ao programa de computador através de um código js, mas pode ser qualquer programa desde que saiba se comunincar via protocolo http.

  - Nunca ponha um arquivo route.js e page.js no mesmo diretório, para n dar conflito \*

* Nome da Função Precisar Ser GET
* GET - Usamos o GET quando queremos dar acesso a informações, sem modificar nenhuma mutação, sem modificar nenhum dado

* Código com informação sensível deve ficar do lado do servidor
