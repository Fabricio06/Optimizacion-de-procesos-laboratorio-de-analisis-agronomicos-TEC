/*
  Warnings:

  - You are about to drop the column `muestrasId` on the `formulario` table. All the data in the column will be lost.
  - You are about to drop the `cliente_formulario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clienteId` to the `formulario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formularioId` to the `muestras` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cliente_formulario" DROP CONSTRAINT "cliente_formulario_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "cliente_formulario" DROP CONSTRAINT "cliente_formulario_formularioId_fkey";

-- DropForeignKey
ALTER TABLE "formulario" DROP CONSTRAINT "formulario_muestrasId_fkey";

-- AlterTable
ALTER TABLE "formulario" DROP COLUMN "muestrasId",
ADD COLUMN     "clienteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "muestras" ADD COLUMN     "formularioId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "cliente_formulario";

-- AddForeignKey
ALTER TABLE "formulario" ADD CONSTRAINT "formulario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "persona_cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "muestras" ADD CONSTRAINT "muestras_formularioId_fkey" FOREIGN KEY ("formularioId") REFERENCES "formulario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
