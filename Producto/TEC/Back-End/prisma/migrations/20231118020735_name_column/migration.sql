/*
  Warnings:

  - Added the required column `nombre` to the `persona_cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "persona_cliente" ADD COLUMN     "nombre" TEXT NOT NULL;


INSERT INTO "lab.persona_cliente" (cedula, nombre, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta)
VALUES
  (123456789, 'Juan','Empresa A', '111111111', 'info@empresaA.com', 'facturacion@empresaA.com', 'Provincia A', 'Canton A', 'Distrito A', 'Dirección A', 'Cultivo A', 'Boleta A'),
  (987654321, 'Maria','Empresa B', '222222222', 'info@empresaB.com', 'facturacion@empresaB.com', 'Provincia B', 'Canton B', 'Distrito B', 'Dirección B', 'Cultivo B', 'Boleta B'),
  (111111111, 'Pedro','Empresa C', '333333333', 'info@empresaC.com', 'facturacion@empresaC.com', 'Provincia C', 'Canton C', 'Distrito C', 'Dirección C', 'Cultivo C', 'Boleta C'),
  (222222222, 'Julian','Empresa D', '444444444', 'info@empresaD.com', 'facturacion@empresaD.com', 'Provincia D', 'Canton D', 'Distrito D', 'Dirección D', 'Cultivo D', 'Boleta D'),
  (333333333, 'Mario','Empresa E', '555555555', 'info@empresaE.com', 'facturacion@empresaE.com', 'Provincia E', 'Canton E', 'Distrito E', 'Dirección E', 'Cultivo E', 'Boleta E'),
  (444444444, 'Jason','Empresa F', '666666666', 'info@empresaF.com', 'facturacion@empresaF.com', 'Provincia F', 'Canton F', 'Distrito F', 'Dirección F', 'Cultivo F', 'Boleta F'),
  (555555555, 'Chris','Empresa G', '777777777', 'info@empresaG.com', 'facturacion@empresaG.com', 'Provincia G', 'Canton G', 'Distrito G', 'Dirección G', 'Cultivo G', 'Boleta G'),
  (666666666, 'Pablo','Empresa H', '888888888', 'info@empresaH.com', 'facturacion@empresaH.com', 'Provincia H', 'Canton H', 'Distrito H', 'Dirección H', 'Cultivo H', 'Boleta H'),
  (777777777, 'Felipe','Empresa I', '999999999', 'info@empresaI.com', 'facturacion@empresaI.com', 'Provincia I', 'Canton I', 'Distrito I', 'Dirección I', 'Cultivo I', 'Boleta I'),
  (888888888, 'Erick','Empresa J', '1010101010', 'info@empresaJ.com', 'facturacion@empresaJ.com', 'Provincia J', 'Canton J', 'Distrito J', 'Dirección J', 'Cultivo J', 'Boleta J');

