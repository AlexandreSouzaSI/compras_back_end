
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { NotFoundError } from '@/application/errors/notFoundError';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';
import { UpdateCompraDto } from '@/infra/http/dtos/compra/update-compra.dto';

export class UpdateCompraUseCase {
    constructor(private compraRepo: ICompraRepository) { }

    async execute(userCargo: string, id: number, dto: UpdateCompraDto) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem editar compras.');
        }

        const compra = await this.compraRepo.findById(id);
        if (!compra) throw new NotFoundError('Compra não encontrada.');

        return this.compraRepo.update(id, dto);
    }
}
