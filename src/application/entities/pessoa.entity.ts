import { Cargo } from "@prisma/client";
import { Compra } from "./compra.entity";
import { Conferencia } from "./conferencia.entity";

export class Pessoa {
    constructor(
        private _id: number,
        private _nome: string,
        private _senha: string,
        private _cargo: Cargo,
        private _ativo: boolean = true,
        private _createdAt: Date,
        private _updatedAt: Date,
        private _email?: string,
        private _compras: Compra[] = [],
        private _conferencias: Conferencia[] = [],
    ) { }

    // Getters e Setters
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

    get email(): string | undefined {
        return this._email;
    }
    set email(value: string | undefined) {
        this._email = value;
    }

    get senha(): string {
        return this._senha;
    }
    set senha(value: string) {
        this._senha = value;
    }

    get cargo(): Cargo {
        return this._cargo;
    }
    set cargo(value: Cargo) {
        this._cargo = value;
    }

    get ativo(): boolean {
        return this._ativo;
    }
    set ativo(value: boolean) {
        this._ativo = value;
    }

    get compras(): Compra[] {
        return this._compras;
    }
    set compras(value: Compra[]) {
        this._compras = value;
    }

    get conferencias(): Conferencia[] {
        return this._conferencias;
    }
    set conferencias(value: Conferencia[]) {
        this._conferencias = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }
    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }
    set updatedAt(value: Date) {
        this._updatedAt = value;
    }
}
