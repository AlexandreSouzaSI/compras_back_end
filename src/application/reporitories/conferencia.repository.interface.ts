import { Conferencia } from "../entities/conferencia.entity";

export interface IConferenciaRepository {
    create(conferencia: Conferencia): Promise<Conferencia>;
    update(conferencia: Conferencia): Promise<Conferencia>;
    createOrUpdate(data: {
        pessoaId: number;
        compraId: number;
        status: string; // ou StatusConferencia se você quiser tipagem enum
        observacao?: string;
    }): Promise<Conferencia>;
    findById(id: number): Promise<Conferencia | null>;
    findAll(): Promise<Conferencia[]>;
    findByFilters(
        nome?: string,
        status?: string,
        valor?: number
    ): Promise<Conferencia[]>;
}
