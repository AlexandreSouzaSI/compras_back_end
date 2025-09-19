export class Fornecedor {
    constructor(private _id: number, private _nome: string) { }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(value: string) {
        this._nome = value;
    }
}