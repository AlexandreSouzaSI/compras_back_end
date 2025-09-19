
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { NotFoundError } from '@/application/errors/notFoundError';
import { IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';
import { UpdatePessoaDto } from '@/infra/http/dtos/pessoa/update-pessoa.dto';

export class UpdatePessoaUseCase {
    constructor(private pessoaRepo: IPessoaRepository) { }

    async execute(userCargo: string, id: number, dto: UpdatePessoaDto) {
        if (userCargo !== 'GERENTE') {
            throw new ForbiddenError('Apenas Gerentes podem editar pessoas.');
        }

        const pessoa = await this.pessoaRepo.findById(id);
        if (!pessoa) throw new NotFoundError('Pessoa não encontrada.');

        return this.pessoaRepo.update(id, dto);
    }
}
