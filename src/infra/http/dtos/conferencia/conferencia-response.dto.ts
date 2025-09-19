import { StatusConferencia } from '@prisma/client';

export class ConferenciaResponseDto {
  id: number;
  status: StatusConferencia;
  observacao?: string;
  data: Date;
  pessoaId: number;
  compraId: number;
}
