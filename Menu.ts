import { ProdutoController } from './src/controller/ProdutoController';
import { ProdutoEletronico } from './src/model/ProdutoEletronico';
import readlinesync = require("readline-sync");

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let nome, descricao, voltagem, marca: string;
    let opcao, preco, estoque: number;

    while (true) {
        console.log("-------------------- E-COMMERCE  --------------------");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Alterar Produto                      ");
        console.log("            4 - Excluir Produto                      ");
        console.log("            5 - Sair                                 ");
        console.log("-----------------------------------------------------");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 5) {
            console.log("Saindo do sistema...");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("----- Cadastrando produto -----");
                nome = readlinesync.question("Nome do produto: ");
                descricao = readlinesync.question("Descricao do produto: ");
                preco = readlinesync.questionFloat("Preco do produto: ");
                estoque = readlinesync.questionInt("Estoque do produto: ");
                voltagem = readlinesync.question("Voltagem do produto: ");
                marca = readlinesync.question("Marca do produto: ");

                produtos.cadastrarProduto(new ProdutoEletronico(0, nome, descricao, preco, estoque, voltagem, marca));

                keyPress();
                break;
            case 2:
                console.log("----- Listando produtos -----");
                produtos.listarProdutos();
                keyPress();
                break;
            case 3:
                console.log("----- Alterando produto -----");
                const idAlterar = readlinesync.questionInt("Digite o ID do produto a ser alterado: ");

                const produtoExistente = produtos.buscarProdutoPorId(idAlterar);

                if (produtoExistente != null) {
                    nome = readlinesync.question("Nome do produto: ");
                    descricao = readlinesync.question("Descricao do produto: ");
                    preco = readlinesync.questionFloat("Preco do produto: ");
                    estoque = readlinesync.questionInt("Estoque do produto: ");
                    voltagem = readlinesync.question("Voltagem do produto: ");
                    marca = readlinesync.question("Marca do produto: ");

                    const produtoAtualizado = new ProdutoEletronico(idAlterar, nome, descricao, preco, estoque, voltagem, marca);
                    produtos.alterarProduto(produtoAtualizado);
                } else {
                    console.log(`Produto ID ${idAlterar} não encontrado!`)
                }

                keyPress();
                break;
            case 4:
                console.log("----- Excluindo produto -----");
                const idExcluir = readlinesync.questionInt("Digite o ID do produto a ser excluido: ");
                produtos.excluirProduto(idExcluir);

                keyPress();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
                keyPress();
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("                Projeto Desenvolvido por:              ");
    console.log("  Daniel Almeida Andrade - dan.andrade313@gmail.com    ");
    console.log("                   github.com/Dan2a                    ");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
    console.clear();
}

main();