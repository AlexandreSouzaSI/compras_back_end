import { CreateConferenciaDto } from '../dto/create-conferencia.dto';
import { UpdateConferenciaDto } from '../dto/update-conferencia.dto';

export interface IConferenciaRepository {
  create(data: CreateConferenciaDto): Promise<any>;
  findById(id: number): Promise<any | null>;
  findAll(): Promise<any[]>;
  update(id: number, data: UpdateConferenciaDto): Promise<any>;
  remove(id: number): Promise<void>;
}
