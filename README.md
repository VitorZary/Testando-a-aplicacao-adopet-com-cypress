## Testando aplicação Adopet utilizando a ferramenta cypress

![Página inicial do Adopet](imagens_readme/Adopet_home.png)

Neste projeto me desafio a escrever testes automatizados com a ferramenta cypress para testar uma aplicação disponibilizada pela alura chamada Adopet, que explicando de uma forma resumida é uma plataforma de visualização e adoção de pets.

Os cenários de testes automatizados desenvolvidos para testar o FrontEnd foram: Cadastro correto, cadastro em massa, cadastro incorreto, criar mensagem correto, criar mensagem incorreto, verificar se os pets aparecem ao usuário logar, login correto, login incorreto, login fluxo alternativo, verificar textos na página inicial e título da página inicial, verificar se pets aparecem na home sem logar, verificar se o nome do usuário aparece no seu Perfil.

Cenários de testes automatizados desenvolvidos para testar a API do Adopet: Testar a API de mensagens com um usuário logado.

### Rodar o projeto

**Requirimentos:**<br>
Node versão v20.10.0. Para gerenciar múltiplas versões do node no windows pode-se usar o nvm-windows. Link: https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-windows <br>
Git instalado na máquina, pode ser obtido em: https://git-scm.com/downloads

**Passo a passo:**

Passo 1: navegando pelo terminal digite o comando na pasta escolhida: git clone `https://github.com/VitorZary/Testando-a-aplicacao-adopet-com-cypress.git`;

Passo 2: com o terminal dentro da pasta raiz do projeto digite: `npm install` para instalar as dependências;

Passo 3: crie o arquivo de ambiente cypress.env.json, com o conteúdo: <br>
`{
    "authorization": "Bearer (token-usuario)"
}` <br>
Você deve substituir o (token-usuario) por um token de um usuário logado obtido no localstorage do navegador;

Passo 4: Se você ainda não realizou nenhum login ou cadastro no sistema o backend vai demorar a responder, antes de rodar os testes é necessário fazer um login no sistema ou um cadastro e esperar (assim o sistema vai subir automaticamente o backend), depois do backend responder (pode demorar alguns minutos) pode seguir com o passo número 5.

Passo 5: para rodar todos os testes do Adopet pode ser utilizado o comando `npx cypress run` na pasta raiz do projeto;