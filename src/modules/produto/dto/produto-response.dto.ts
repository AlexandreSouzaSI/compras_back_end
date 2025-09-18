// produto-response.dto.ts
export class ProdutoResponseDto {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
  fornecedorId: number;
  criatedAt: Date;
}
