import { Conferencia } from '@/application/entities/conferencia.entity';
import { IConferenciaRepository } from '@/application/reporitories/conferencia.repository.interface';

export class CreateConferenciaUseCase {
    constructor(private conferenciaRepo: IConferenciaRepository) { }

    async execute(conferencia: Conferencia): Promise<Conferencia> {
        return this.conferenciaRepo.create(conferencia);
    }
}
