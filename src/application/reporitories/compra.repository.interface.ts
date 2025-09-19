import { Compra } from "@/application/entities/compra.entity";
import { CreateCompraDto } from "@/infra/http/dtos/compra/create-compra.dto";
import { UpdateCompraDto } from "@/infra/http/dtos/compra/update-compra.dto";

export const ICompraRepositoryToken = Symbol('ICompraRepository');

export interface ICompraRepository {
  create(data: CreateCompraDto): Promise<Compra>;
  findById(id: number): Promise<Compra | null>;
  findAll(): Promise<Compra[]>;
  findByNomeOuValor(nome?: string, valor?: number): Promise<Compra[]>;
  update(id: number, data: UpdateCompraDto): Promise<Compra>;
  delete(id: number): Promise<void>;
}

