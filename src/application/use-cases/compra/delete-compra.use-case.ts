import { ForbiddenError } from '@/application/errors/forbiddenError';
import { NotFoundError } from '@/application/errors/notFoundError';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';

export class DeleteCompraUseCase {
    constructor(private compraRepo: ICompraRepository) { }

    async execute(userCargo: string, id: number) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem excluir compras.');
        }

        const compra = await this.compraRepo.findById(id);
        if (!compra) throw new NotFoundError('Compra não encontrada.');

        return this.compraRepo.delete(id);
    }
}
