import { IPessoaRepositoryToken, type IPessoaRepository } from '@/application/reporitories/pessoa.repository.interface';
import { CreatePessoaUseCase } from '@/application/use-cases/pessoa/create-pessoa.use-case';
import { DeletePessoaUseCase } from '@/application/use-cases/pessoa/delete-pessoa.use-case';
import { FindAllPessoaUseCase } from '@/application/use-cases/pessoa/find-all-pessoa.use-case';
import { FindByEmailUseCase } from '@/application/use-cases/pessoa/find-pessoa-by-email.use-case';
import { FindPessoaByIdUseCase } from '@/application/use-cases/pessoa/find-pessoa-by-id.use-case';
import { FindPessoaByNomeOuCargoUseCase } from '@/application/use-cases/pessoa/find-pessoa-by-nome-ou-cargo.use-case';
import { UpdatePessoaUseCase } from '@/application/use-cases/pessoa/update-pessoa.use-case';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PessoaService {
  public readonly createPessoa: CreatePessoaUseCase;
  public readonly updatePessoa: UpdatePessoaUseCase;
  public readonly deletePessoa: DeletePessoaUseCase;
  public readonly findAllPessoa: FindAllPessoaUseCase;
  public readonly findByIdPessoa: FindPessoaByIdUseCase;
  public readonly findByEmailPessoa: FindByEmailUseCase;
  public readonly findByNomeOuCargoPessoa: FindPessoaByNomeOuCargoUseCase;

  constructor(
    @Inject(IPessoaRepositoryToken)
    private readonly pessoaRepo: IPessoaRepository,
  ) {
    this.createPessoa = new CreatePessoaUseCase(this.pessoaRepo);
    this.updatePessoa = new UpdatePessoaUseCase(this.pessoaRepo);
    this.deletePessoa = new DeletePessoaUseCase(this.pessoaRepo);
    this.findAllPessoa = new FindAllPessoaUseCase(this.pessoaRepo);
    this.findByIdPessoa = new FindPessoaByIdUseCase(this.pessoaRepo);
    this.findByEmailPessoa = new FindByEmailUseCase(this.pessoaRepo);
    this.findByNomeOuCargoPessoa = new FindPessoaByNomeOuCargoUseCase(this.pessoaRepo);
  }
}
