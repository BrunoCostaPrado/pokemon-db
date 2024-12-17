import { prisma } from "@/lib/prisma"
import type { pokemon } from "@/lib/types"
import { faker } from "@faker-js/faker"
import type { FastifyInstance } from "fastify"

console.time("Create Pokemons")
export async function seed(app: FastifyInstance) {
  app.get("", async (request, reply) => {
    console.time("Create Pokemons")
    await prisma.pokemons.deleteMany({})

    const amountOfPokemons = 300
    const pokemon: pokemon[] = []

    for (let i = 0; i < amountOfPokemons; i++) {
      const firstName = faker.person.firstName()
      const lastName = faker.person.lastName()

      pokemon.push({
        name: `${firstName} ${lastName}`,
        number: faker.number.int(100000),
        price: faker.number.int(1000),
        collection: faker.commerce.productName(),
        rarity: faker.commerce.productMaterial(),
        quantity: faker.number.int(10000),
      })
    }

    const addPokemon = async () =>
      await prisma.pokemons.createMany({
        data: pokemon,
      })
    addPokemon()
    console.timeEnd("Create Pokemons")
    return reply.send(`${amountOfPokemons} Pokemons Created`)
  })
}

// seed()
// 	.catch((e) => {
// 		console.log(e)
// 		process.exit(1)
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect()
// 	})

console.timeEnd("Create Pokemons")
