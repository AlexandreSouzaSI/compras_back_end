// src/infra/database/mappers/pessoa.mapper.ts
import { Pessoa } from "@/application/entities/pessoa.entity";
import { Compra } from "@/application/entities/compra.entity";
import { Conferencia } from "@/application/entities/conferencia.entity";

export class PessoaMapper {
    static toDomain(raw: any): Pessoa {
        const compras: Compra[] = raw.compras?.map((c: any) => c) ?? [];
        const conferencias: Conferencia[] = raw.conferencias?.map((c: any) => c) ?? [];

        return new Pessoa(
            raw.id,
            raw.nome,
            raw.senha,
            raw.cargo,
            raw.ativo ?? true,
            raw.createdAt,
            raw.updatedAt,
            raw.email ?? undefined,
            compras,
            conferencias
        );
    }

    static toPrisma(pessoa: Pessoa) {
        return {
            id: pessoa.id,
            nome: pessoa.nome,
            senha: pessoa.senha,
            cargo: pessoa.cargo,
            ativo: pessoa.ativo,
            email: pessoa.email,
            createdAt: pessoa.createdAt,
            updatedAt: pessoa.updatedAt,
        };
    }
}
