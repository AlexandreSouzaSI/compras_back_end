
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';

export class FindAllPessoaUseCase {
    constructor(private pessoaRepo: IPessoaRepository) { }

    async execute(userCargo: string) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem acessar o painel de pessoas.');
        }

        return this.pessoaRepo.findAll();
    }
}
