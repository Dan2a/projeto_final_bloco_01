import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

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
                console.log("Cadastrando produto...");
                // Lógica para cadastrar produto
                keyPress();
                break;
            case 2:
                console.log("Listando produtos...");
                // Lógica para listar produtos
                keyPress();
                break;
            case 3:
                console.log("Alterando produto...");
                // Lógica para alterar produto
                keyPress();
                break;
            case 4:
                console.log("Excluindo produto...");
                // Lógica para excluir produto
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
}

main();