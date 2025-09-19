import { IConferenciaRepository } from "@/application/reporitories/conferencia.repository.interface";

export class FindConferenciaByFiltersUseCase {
    constructor(private conferenciaRepo: IConferenciaRepository) { }

    async execute(nome?: string, status?: string, valor?: number) {
        return this.conferenciaRepo.findByFilters(nome, status, valor);
    }
}

