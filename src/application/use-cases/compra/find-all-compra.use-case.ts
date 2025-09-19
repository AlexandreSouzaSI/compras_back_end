
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';

export class FindAllCompraUseCase {
    constructor(private compraRepo: ICompraRepository) { }

    async execute(userCargo: string) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem acessar o painel de compras.');
        }

        return this.compraRepo.findAll();
    }
}
