export class CompraProduto {
    constructor(
        private _produtoId: number,
        private _quantidade: number,
        private _precoUnitario: number,
    ) { }

    get produtoId(): number {
        return this._produtoId;
    }
    set produtoId(value: number) {
        this._produtoId = value;
    }

    get quantidade(): number {
        return this._quantidade;
    }
    set quantidade(value: number) {
        this._quantidade = value;
    }

    get precoUnitario(): number {
        return this._precoUnitario;
    }
    set precoUnitario(value: number) {
        this._precoUnitario = value;
    }
}