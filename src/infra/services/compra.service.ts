import type { ICompraRepository } from '@/application/reporitories/compra.repository.interface';
import { ICompraRepositoryToken } from '@/application/reporitories/compra.repository.interface';
import { CreateCompraUseCase } from '@/application/use-cases/compra/create-compra.use-case';
import { DeleteCompraUseCase } from '@/application/use-cases/compra/delete-compra.use-case';
import { FindAllCompraUseCase } from '@/application/use-cases/compra/find-all-compra.use-case';
import { FindCompraByIdUseCase } from '@/application/use-cases/compra/find-compra-by-id.use-case';
import { FindCompraByNomeOuValorUseCase } from '@/application/use-cases/compra/find-compra-by-nome-ou-valor.use-case';
import { UpdateCompraUseCase } from '@/application/use-cases/compra/update-compra.use-case';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CompraService {
  public readonly createCompra: CreateCompraUseCase;
  public readonly updateCompra: UpdateCompraUseCase;
  public readonly deleteCompra: DeleteCompraUseCase;
  public readonly findAllCompra: FindAllCompraUseCase;
  public readonly findByIdCompra: FindCompraByIdUseCase;
  public readonly findByNomeOuValorCompra: FindCompraByNomeOuValorUseCase;

  constructor(
    @Inject(ICompraRepositoryToken)
    private readonly compraRepo: ICompraRepository,
  ) {
    this.createCompra = new CreateCompraUseCase(this.compraRepo);
    this.updateCompra = new UpdateCompraUseCase(this.compraRepo);
    this.deleteCompra = new DeleteCompraUseCase(this.compraRepo);
    this.findAllCompra = new FindAllCompraUseCase(this.compraRepo);
    this.findByIdCompra = new FindCompraByIdUseCase(this.compraRepo);
    this.findByNomeOuValorCompra = new FindCompraByNomeOuValorUseCase(this.compraRepo);
  }
}
