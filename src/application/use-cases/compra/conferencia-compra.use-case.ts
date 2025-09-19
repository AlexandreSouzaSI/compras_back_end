
import { NotFoundError } from '@/application/errors/notFoundError';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';
import { IConferenciaRepository } from '@/application/reporitories/conferencia.repository.interface';

export class ConferenciaCompraUseCase {
    constructor(
        private compraRepo: ICompraRepository,
        private conferenciaRepo: IConferenciaRepository
    ) { }

    async execute(pessoaId: number, compraId: number, status: string, observacao?: string) {
        const compra = await this.compraRepo.findById(compraId);
        if (!compra) throw new NotFoundError('Compra não encontrada.');

        return this.conferenciaRepo.createOrUpdate({
            pessoaId,
            compraId,
            status,
            observacao,
        });
    }
}
