import { prisma } from "@/lib/prisma"
import type { FastifyInstance } from "fastify"
import { z } from "zod"

export async function createPokemon(app: FastifyInstance) {
  try {
    app.post("/create-pokemon", async (request, reply) => {
      const createPokemon = z.object({
        name: z.string(),
        number: z.number(),
        price: z.number(),
        rarity: z.string(),
        collection: z.string(),
        quantity: z.number().optional(),
      })

      const { name, number, price, rarity, collection, quantity } =
        createPokemon.parse(request.body)

      const pokemon = await prisma.pokemons.create({
        data: {
          name,
          number,
          price,
          rarity,
          collection,
          quantity,
        },
      })

      return reply
        .status(201)
        .send({ pokemonId: pokemon.id, name: pokemon.name })
    })
  } catch (e) {
    console.log(e)
  }
}
