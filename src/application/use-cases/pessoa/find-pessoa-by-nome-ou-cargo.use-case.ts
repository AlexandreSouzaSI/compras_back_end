
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';
import { Cargo } from '@prisma/client';

export class FindPessoaByNomeOuCargoUseCase {
    constructor(private pessoaRepo: IPessoaRepository) { }

    async execute(userCargo: string, nome?: string, cargo?: Cargo) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem acessar o painel de pessoas.');
        }

        return this.pessoaRepo.findByNomeOuCargo(nome, cargo);
    }
}
