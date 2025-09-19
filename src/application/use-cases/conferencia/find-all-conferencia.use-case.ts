import { IConferenciaRepository } from "@/application/reporitories/conferencia.repository.interface";

export class FindAllConferenciaUseCase {
    constructor(private conferenciaRepo: IConferenciaRepository) { }

    async execute() {
        return this.conferenciaRepo.findAll();
    }
}