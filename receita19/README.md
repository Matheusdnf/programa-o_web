Server Actions - facilitação na requizição da api

- Use Cliente

* Ponto de visto do usuário que irá acessar o navegador (funções de exibição, html)

- Serve Actins

* Todas as funções por padrão são server actions, são as funções que estão do lado do servidor, requisições,validações...

Vai ser escrito várias funções em uma rota sem page.js e sem route.js. A qual iram poder receber parâmetros facilmente transmissíveis via web - Strings, inteiros, mapas, dados de formulário objetos JSON etc. Essas funções poderam retornar, basicamente, o mesmo tipo de coisa que pode receber como parâmetro - Strings, inteiros, mapas, dados de formulário objetos JSON etc. Tais funções iram rodar no servidor e, portanto, poder acessar a base de dados sem maiores problemas. E essa ruma de função vai poder ser chamada de "client components" e "server components" como se chama qualquer função: importe, escreva o nome da função em algum canto, passe os parâmetros e se divirta com o retorno! Toda a burocracia por debaixo dos panos será realizada pelo Next JS!!!
