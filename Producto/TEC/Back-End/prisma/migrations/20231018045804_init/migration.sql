-- CreateTable
CREATE TABLE "Autenticar" (
    "id" SERIAL NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "Autenticar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona_Tecnico" (
    "id" SERIAL NOT NULL,
    "correoInstitucional" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "autenticarId" INTEGER NOT NULL,

    CONSTRAINT "Persona_Tecnico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Persona_Tecnico" ADD CONSTRAINT "Persona_Tecnico_autenticarId_fkey" FOREIGN KEY ("autenticarId") REFERENCES "Autenticar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
