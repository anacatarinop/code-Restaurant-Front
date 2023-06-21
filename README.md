# Menu do Restaurante

Este é um projeto de interface de usuário para um menu de restaurante. Ele permite adicionar, editar e excluir itens do menu. A interface é construída usando HTML, CSS e Bootstrap, enquanto as interações com a API são realizadas usando JavaScript.

## Funcionalidades

- Adicionar um novo item ao menu, incluindo nome, descrição e preço.
- Visualizar a lista de itens do menu, exibindo o ID, nome, descrição, preço e opções de edição/exclusão.
- Editar um item existente do menu, atualizando o nome, descrição e preço.
- Excluir um item do menu.

## Pré-requisitos

- Um servidor de API RESTful que siga a estrutura esperada pelas chamadas AJAX na aplicação JavaScript. Certifique-se de configurar corretamente a URL da API para cada chamada no código JavaScript.

## Como usar

1. Clone o repositório para o seu servidor web.
2. Configure corretamente as URLs da API em cada chamada AJAX no código JavaScript.
3. Abra o arquivo `index.html` em um navegador web.
4. O formulário de adicionar item será exibido no topo da página. Preencha os campos nome, descrição e preço e clique no botão "Adicionar" para adicionar o item ao menu.
5. A tabela abaixo do formulário exibirá a lista de itens do menu. Cada linha da tabela mostra o ID, nome, descrição, preço e opções de edição/exclusão para cada item.
6. Para editar um item, clique no botão "Editar" correspondente ao item desejado na tabela. Os campos do formulário serão preenchidos automaticamente com os dados do item selecionado. Faça as alterações desejadas e clique no botão "Atualizar" para salvar as alterações.
7. Para excluir um item, clique no botão "Excluir" correspondente ao item desejado na tabela. Será exibida uma mensagem de confirmação antes de excluir o item permanentemente.

*Observação: Certifique-se de substituir as URLs da API (`http://localhost:5502/api/menu/`) pelas URLs corretas correspondentes ao seu servidor de API Spring Boot.*

Espero que este read.me tenha sido útil para entender o projeto do Menu do Restaurante. Se tiver alguma dúvida adicional, sinta-se à vontade para perguntar.
