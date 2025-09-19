import { StatusConferencia } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateConferenciaDto {
    @IsEnum(StatusConferencia)
    status: StatusConferencia; // obrigatório

    @IsOptional()
    @IsString()
    observacao?: string;
}
