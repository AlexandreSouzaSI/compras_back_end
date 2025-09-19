import { IsOptional, IsString, IsNumber } from 'class-validator';

export class FindCompraDto {
    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsNumber()
    valor?: number;
}
