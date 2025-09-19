import { IConferenciaRepository } from "@/application/reporitories/conferencia.repository.interface";

export class UpdateConferenciaUseCase {
    constructor(private conferenciaRepo: IConferenciaRepository) { }

    async execute(id: number, status: string, observacao?: string) {
        const conf = await this.conferenciaRepo.findById(id);
        if (!conf) throw new Error('Conferência não encontrada');

        conf.status = status as any; // converter para enum
        if (observacao) conf.observacao = observacao;

        return this.conferenciaRepo.update(conf);
    }
}
