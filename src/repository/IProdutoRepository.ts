import { Produto } from "../model/Produto";

export interface IProdutoRepository {
    // CRUD de produtos
    cadastrarProduto(produto: Produto): void;
    listarProdutos(): void;
    alterarProduto(produto: Produto): void;
    excluirProduto(id: number): void;
}