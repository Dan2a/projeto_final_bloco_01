import { Produto } from "./Produto";

export class ProdutoEletronico extends Produto {
    private _voltagem: string;
    private _marca: string;

    constructor(id: number, nome: string, descricao: string, preco: number, estoque: number, voltagem: string, marca: string) {
        super(id, nome, descricao, preco, estoque);
        this._voltagem = voltagem;
        this._marca = marca;
    }

    public get voltagem(): string {
        return this._voltagem;
    }

    public set voltagem(value: string) {
        this._voltagem = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public detalhesProduto(): void {
        super.detalhesProduto();
        console.log(`Voltagem: ${this.voltagem}`);
        console.log(`Marca: ${this.marca}`);
        console.log("----------------------------------\n");
    }
}