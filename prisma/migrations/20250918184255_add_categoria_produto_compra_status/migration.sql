/*
  Warnings:

  - The values [COMPRADOR] on the enum `Cargo` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."CompraStatus" AS ENUM ('PENDENTE', 'APROVADO', 'REPROVADO', 'CORRIGIDA', 'CANCELADO');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Cargo_new" AS ENUM ('CONFERENTE', 'GERENTE');
ALTER TABLE "public"."Pessoa" ALTER COLUMN "cargo" TYPE "public"."Cargo_new" USING ("cargo"::text::"public"."Cargo_new");
ALTER TYPE "public"."Cargo" RENAME TO "Cargo_old";
ALTER TYPE "public"."Cargo_new" RENAME TO "Cargo";
DROP TYPE "public"."Cargo_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."Compra" ADD COLUMN     "ajustado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "status" "public"."CompraStatus" NOT NULL DEFAULT 'PENDENTE';

-- AlterTable
ALTER TABLE "public"."Produto" ADD COLUMN     "categoriaId" INTEGER,
ADD COLUMN     "minEstoque" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nome_key" ON "public"."Categoria"("nome");

-- AddForeignKey
ALTER TABLE "public"."Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
