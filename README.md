# Projeto Final Bloco 1

Este projeto é um sistema simples de gestão de e-commerce (CRUD) que funciona através da linha de comandos (CLI). Foi desenvolvido em TypeScript.

---

## Funcionalidades

O menu principal permite ao utilizador realizar as seguintes operações de gestão de produtos:

* **1. Cadastrar produto:** Adiciona um novo produto eletrónico ao sistema.
* **2. Listar Produtos:** Exibe todos os produtos atualmente cadastrados.
* **3. Alterar Produto:** Permite atualizar os dados de um produto existente, procurando-o pelo ID.
* **4. Excluir Produto:** Remove um produto do sistema com base no seu ID.
* **5. Sair:** Encerra a aplicação.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

* **`Menu.ts`**: Ficheiro principal que contém a lógica do menu interativo e interage com o utilizador.
* **`src/model/`**: Contém as classes de dados.
    * `Produto.ts`: Classe abstrata base para todos os produtos.
    * `ProdutoEletronico.ts`: Classe que estende `Produto` com atributos específicos como voltagem e marca.
* **`src/repository/`**: Define as interfaces para operações de dados.
    * `IProdutoRepository.ts`: Interface que define o contrato para o CRUD de produtos (cadastrar, listar, alterar, excluir).
* **`src/controller/`**: Implementa a lógica de negócios.
    * `ProdutoController.ts`: Implementa `IProdutoRepository` e gere uma lista de produtos em memória. É responsável por criar, ler, atualizar e excluir produtos.

---

## Tecnologias Utilizadas

* **TypeScript**
* **Node.js**
* **`readline-sync`**: Para capturar a entrada do utilizador no terminal de forma síncrona.

---

## Autor

* **Daniel Almeida Andrade**
