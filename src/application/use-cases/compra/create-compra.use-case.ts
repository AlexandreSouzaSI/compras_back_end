
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';
import { CreateCompraDto } from '@/infra/http/dtos/compra/create-compra.dto';

export class CreateCompraUseCase {
    constructor(private compraRepo: ICompraRepository) { }

    async execute(userCargo: string, dto: CreateCompraDto) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem criar compras.');
        }

        return this.compraRepo.create(dto);
    }
}
