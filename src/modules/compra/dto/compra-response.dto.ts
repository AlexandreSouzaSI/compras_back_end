export class CompraResponseDto {
  id: number;
  data: Date;
  pessoaId: number;
  fornecedorId: number;
  produtos: {
    produtoId: number;
    quantidade: number;
    precoUnitario: number;
  }[];
}
