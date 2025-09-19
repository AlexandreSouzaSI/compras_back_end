
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { NotFoundError } from '@/application/errors/notFoundError';
import { IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';

export class FindPessoaByIdUseCase {
    constructor(private pessoaRepo: IPessoaRepository) { }

    async execute(userCargo: string, id: number) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem acessar o painel de pessoas.');
        }

        const pessoa = await this.pessoaRepo.findById(id);
        if (!pessoa) throw new NotFoundError('Pessoa não encontrada.');

        return pessoa;
    }
}
