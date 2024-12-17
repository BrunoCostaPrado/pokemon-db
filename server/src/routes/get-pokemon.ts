import { prisma } from "$lib/prisma"
import type { FastifyInstance } from "fastify"
import { z } from "zod"

export async function getPokemon(app: FastifyInstance) {
  app.get("/getPokemon/:pokemonId", async (request, reply) => {
    console.time("Find Pokemons")
    const getPokemonParams = z.object({
      pokemonId: z.string().uuid(),
    })

    const { pokemonId } = getPokemonParams.parse(request.params)

    const pokemon = await prisma.pokemons.findUnique({
      where: {
        id: pokemonId,
      },
    })
    console.timeEnd("Find Pokemons")
    return reply.send(pokemon)
  })
}
