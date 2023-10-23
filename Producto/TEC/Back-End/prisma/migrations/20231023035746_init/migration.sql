-- CreateTable
CREATE TABLE "cliente_formulario" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "formularioId" INTEGER NOT NULL,

    CONSTRAINT "cliente_formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formulario" (
    "id" SERIAL NOT NULL,
    "muestrasId" INTEGER NOT NULL,

    CONSTRAINT "formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "muestras" (
    "id" SERIAL NOT NULL,
    "codigo_laboratorio" TEXT NOT NULL,
    "identificacion_campo" TEXT NOT NULL,
    "tipo_muestraId" INTEGER NOT NULL,

    CONSTRAINT "muestras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_muestras" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "tipo_muestras_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_muestras_nombre_key" ON "tipo_muestras"("nombre");

-- AddForeignKey
ALTER TABLE "cliente_formulario" ADD CONSTRAINT "cliente_formulario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "persona_cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente_formulario" ADD CONSTRAINT "cliente_formulario_formularioId_fkey" FOREIGN KEY ("formularioId") REFERENCES "formulario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulario" ADD CONSTRAINT "formulario_muestrasId_fkey" FOREIGN KEY ("muestrasId") REFERENCES "muestras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "muestras" ADD CONSTRAINT "muestras_tipo_muestraId_fkey" FOREIGN KEY ("tipo_muestraId") REFERENCES "tipo_muestras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
