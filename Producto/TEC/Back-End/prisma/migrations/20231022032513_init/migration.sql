-- CreateTable
CREATE TABLE "autenticar" (
    "id" SERIAL NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "autenticar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persona_tecnico" (
    "id" SERIAL NOT NULL,
    "correoInstitucional" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "autenticarId" INTEGER NOT NULL,

    CONSTRAINT "persona_tecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persona_cliente" (
    "id" SERIAL NOT NULL,
    "cedula" INTEGER NOT NULL,
    "empresa" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email_informe" TEXT NOT NULL,
    "email_factura" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "canton" TEXT NOT NULL,
    "distrito" TEXT NOT NULL,
    "otras_senas" TEXT NOT NULL,
    "cultivo" TEXT NOT NULL,
    "boleta" TEXT NOT NULL,

    CONSTRAINT "persona_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "persona_cliente_cedula_key" ON "persona_cliente"("cedula");

-- AddForeignKey
ALTER TABLE "persona_tecnico" ADD CONSTRAINT "persona_tecnico_autenticarId_fkey" FOREIGN KEY ("autenticarId") REFERENCES "autenticar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
