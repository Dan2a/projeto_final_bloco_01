export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _descricao: string;
    private _preco: number;
    private _estoque: number;

    constructor(id: number, nome: string, descricao: string, preco: number, estoque: number) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
        this._estoque = estoque;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(value: string) {
        this._descricao = value;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    public get estoque(): number {
        return this._estoque;
    }

    public set estoque(value: number) {
        this._estoque = value;
    }

    public detalhesProduto(): void {
        console.log("\n----------------------------------");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Estoque: ${this.estoque} unidades`);
    }

}