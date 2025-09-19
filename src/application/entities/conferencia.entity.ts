import { StatusConferencia } from '@prisma/client';
import { Compra } from './compra.entity';
import { Pessoa } from './pessoa.entity';

export class Conferencia {
    private _id: number;
    private _status: StatusConferencia;
    private _observacao?: string;
    private _data: Date;
    private _compra: Compra;
    private _pessoa: Pessoa;

    constructor(
        id: number,
        status: StatusConferencia,
        compra: Compra,
        pessoa: Pessoa,
        observacao?: string,
        data?: Date,
    ) {
        this._id = id;
        this._status = status;
        this._compra = compra;
        this._pessoa = pessoa;
        this._observacao = observacao;
        this._data = data ?? new Date();
    }

    get id() { return this._id; }
    get status() { return this._status; }
    get observacao(): string | undefined { return this._observacao; }
    get data() { return this._data; }
    get compra() { return this._compra; }
    get pessoa() { return this._pessoa; }

    set status(status: StatusConferencia) { this._status = status; }
    set observacao(obs: string) { this._observacao = obs; }
}
