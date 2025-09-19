import { CompraStatus } from "@prisma/client";
import { CompraProduto } from "./compraProduto.entity";
import { Fornecedor } from "./fornecedor.entity";
import { Pessoa } from "./pessoa.entity";

export class Compra {
    constructor(
        private _id: number,
        private _pessoaId: number,
        private _data: Date,
        private _fornecedorId: number,
        private _produtos: CompraProduto[],
        private _fornecedor: Fornecedor,
        private _pessoa: Pessoa,
        private _status: CompraStatus,
        private _ajustado: boolean,
        private _createdAt: Date,
        private _updatedAt: Date,
    ) { }

    get id(): number { return this._id; }
    get pessoaId(): number { return this._pessoaId; }
    get data(): Date { return this._data; }
    get fornecedorId(): number { return this._fornecedorId; }
    get produtos(): CompraProduto[] { return this._produtos; }
    get fornecedor(): Fornecedor { return this._fornecedor; }
    get pessoa(): Pessoa { return this._pessoa; }
    get status(): CompraStatus { return this._status; }
    get ajustado(): boolean { return this._ajustado; }
    get createdAt(): Date { return this._createdAt; }
    get updatedAt(): Date { return this._updatedAt; }

    set id(value: number) { this._id = value; }
    set pessoaId(value: number) { this._pessoaId = value; }
    set data(value: Date) { this._data = value; }
    set fornecedorId(value: number) { this._fornecedorId = value; }
    set produtos(value: CompraProduto[]) { this._produtos = value; }
    set fornecedor(value: Fornecedor) { this._fornecedor = value; }
    set pessoa(value: Pessoa) { this._pessoa = value; }
    set status(value: CompraStatus) { this._status = value; }
    set ajustado(value: boolean) { this._ajustado = value; }
    set createdAt(value: Date) { this._createdAt = value; }
    set updatedAt(value: Date) { this._updatedAt = value; }
}
