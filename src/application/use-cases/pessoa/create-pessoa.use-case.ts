
import { ForbiddenError } from '@/application/errors/forbiddenError';
import { IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';
import { CreatePessoaDto } from '@/infra/http/dtos/pessoa/create-pessoa.dto';

export class CreatePessoaUseCase {
    constructor(private pessoaRepo: IPessoaRepository) { }

    async execute(userCargo: string, dto: CreatePessoaDto) {
        return this.pessoaRepo.create(dto);
    }
}
