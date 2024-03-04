-- CreateTable
CREATE TABLE "Pokemons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);
