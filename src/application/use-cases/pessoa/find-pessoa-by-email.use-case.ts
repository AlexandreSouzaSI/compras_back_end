
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { NotFoundError } from '@/application/errors/notFoundError';
import { IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';

export class FindByEmailUseCase {
    constructor(private pessoaRepo: IPessoaRepository) { }

    async execute(email: string) {

        const pessoa = await this.pessoaRepo.findByEmail(email);
        if (!pessoa) throw new NotFoundError('Pessoa não encontrada.');

        return pessoa;
    }
}
