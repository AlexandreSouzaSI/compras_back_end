
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { ICompraRepository } from '@/application/reporitories/compra.repository.interface';

export class FindCompraByNomeOuValorUseCase {
    constructor(private compraRepo: ICompraRepository) { }

    async execute(userCargo: string, nome?: string, valor?: number) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem acessar o painel de compras.');
        }

        return this.compraRepo.findByNomeOuValor(nome, valor);
    }
}
