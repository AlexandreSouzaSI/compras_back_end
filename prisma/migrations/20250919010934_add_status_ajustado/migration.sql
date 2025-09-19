/*
  Warnings:

  - You are about to drop the column `cnpj` on the `Fornecedor` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CompraProduto" DROP CONSTRAINT "CompraProduto_compraId_fkey";

-- DropIndex
DROP INDEX "public"."Fornecedor_cnpj_key";

-- AlterTable
ALTER TABLE "public"."Compra" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Fornecedor" DROP COLUMN "cnpj",
ADD COLUMN     "empresa" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."CompraProduto" ADD CONSTRAINT "CompraProduto_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "public"."Compra"("id") ON DELETE CASCADE ON UPDATE CASCADE;
