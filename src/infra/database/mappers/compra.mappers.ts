// src/infra/database/mappers/compra.mapper.ts
import { Compra } from "@/application/entities/compra.entity";
import { CompraProduto } from "@/application/entities/compraProduto.entity";
import { Fornecedor } from "@/application/entities/fornecedor.entity";
import { Pessoa } from "@/application/entities/pessoa.entity";

export class CompraMapper {
    // Converte o objeto bruto do Prisma para a entidade de domínio
    static toDomain(raw: any): Compra {
        // Mapeia os produtos da compra
        const produtos: CompraProduto[] = raw.produtos?.map((p: any) =>
            new CompraProduto(p.produtoId, p.quantidade, p.precoUnitario)
        ) ?? [];

        // Cria o fornecedor
        const fornecedor = new Fornecedor(
            raw.fornecedor.id,
            raw.fornecedor.nome
        );

        // Cria a pessoa responsável
        const pessoa = new Pessoa(
            raw.pessoa.id,
            raw.pessoa.nome,
            raw.pessoa.senha,
            raw.pessoa.cargo,
            raw.pessoa.ativo,
            raw.pessoa.createdAt,
            raw.pessoa.updatedAt,
            raw.pessoa.email ?? undefined,
            raw.pessoa.compras ?? [],
            raw.pessoa.conferencias ?? []
        );

        // Cria a compra
        return new Compra(
            raw.id,
            raw.pessoaId,
            raw.data,
            raw.fornecedorId,
            produtos,
            fornecedor,
            pessoa,
            raw.status,
            raw.ajustado,
            raw.createdAt,
            raw.updatedAt
        );
    }

    // Converte a entidade de domínio para formato Prisma (criação)
    static toPrisma(compra: Compra) {
        return {
            id: compra.id,
            pessoaId: compra.pessoaId,
            fornecedorId: compra.fornecedorId,
            data: compra.data,
            status: compra.status,
            ajustado: compra.ajustado,
            produtos: {
                create: compra.produtos.map(p => ({
                    produtoId: p.produtoId,
                    quantidade: p.quantidade,
                    precoUnitario: p.precoUnitario,
                })),
            },
            createdAt: compra.createdAt,
            updatedAt: compra.updatedAt,
        };
    }

    // Converte a entidade de domínio para formato Prisma (atualização)
    static toPrismaUpdate(compra: Compra) {
        return {
            pessoaId: compra.pessoaId,
            fornecedorId: compra.fornecedorId,
            data: compra.data,
            status: compra.status,
            ajustado: compra.ajustado,
            produtos: compra.produtos.length
                ? {
                    deleteMany: {},
                    create: compra.produtos.map(p => ({
                        produtoId: p.produtoId,
                        quantidade: p.quantidade,
                        precoUnitario: p.precoUnitario,
                    })),
                }
                : undefined,
        };
    }
}
