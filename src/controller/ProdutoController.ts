import { Produto } from "../model/Produto";
import { ProdutoEletronico } from "../model/ProdutoEletronico";
import { IProdutoRepository } from "../repository/IProdutoRepository";

export class ProdutoController implements IProdutoRepository {

    private listaProdutos: Produto[] = [];
    private proximoId: number = 1;

    cadastrarProduto(produto: Produto): void {
        produto.id = this.proximoId++;
        this.listaProdutos.push(produto);
        console.log(`Produto ${produto.id} - ${produto.nome} foi cadastrado com sucesso!`);
    }

    listarProdutos(): void {
        if (this.listaProdutos.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;
        }

        this.listaProdutos.forEach(produto => {
            produto.detalhesProduto();
        });
    }

    alterarProduto(produtoAtualizado: Produto): void {
        const index = this.listaProdutos.findIndex(p => p.id === produtoAtualizado.id);

        if (index !== -1) {
            this.listaProdutos[index] = produtoAtualizado;
            console.log(`Produto ID ${produtoAtualizado.id} alterado com sucesso!`);
        } else {
            console.log(`Produto ID ${produtoAtualizado.id} não encontrado!`);
        }
    }

    excluirProduto(id: number): void {
        const index = this.listaProdutos.findIndex(produto => produto.id === id);

        if (index !== -1) {
            const removido = this.listaProdutos.splice(index, 1);
            console.log(`Produto ID ${id} excluído com sucesso!`);
        } else {
            console.log(`Produto ID ${id} não encontrado!`);
        }
    }


    // Metodo auxiliares

    public buscarProdutoPorId(id: number): Produto | null {
        const produto = this.listaProdutos.find(p => p.id === id);
        return produto ? produto : null;
    }

    public listarProdutosPorMarca(marca: string): Produto[] {
        const produtosFiltrados = this.listaProdutos.filter(produto => {
            if (produto instanceof ProdutoEletronico) {
                return produto.marca.toLowerCase() === marca.toLowerCase();
            }

            return false;
        });

        return produtosFiltrados;
    }
}