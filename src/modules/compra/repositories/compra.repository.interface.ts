import { CreateCompraDto } from '../dto/create-compra.dto';
import { UpdateCompraDto } from '../dto/update-compra.dto';

export interface ICompraRepository {
  create(data: CreateCompraDto): Promise<any>;
  findById(id: number): Promise<any | null>;
  findAll(): Promise<any[]>;
  update(id: number, data: UpdateCompraDto): Promise<any>;
  remove(id: number): Promise<void>;
}
