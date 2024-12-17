import { app, type findpokemonname, prisma } from "$lib"
import { Prisma } from "@prisma/client"
//import { FastifyInstance } from "fastify"
import { z } from "zod"

export async function getPokemonByName(/*app: FastifyInstance*/) {
  app.get("/getPokemonsByName/:pokemonName", async (request, reply) => {
    console.time("Find Pokemons")
    const getPokemonParams = z.object({
      pokemonName: z.string(),
    })

    const { pokemonName } = getPokemonParams.parse(request.params)

    const pokemonFind: findpokemonname =
      Prisma.validator<Prisma.PokemonsWhereInput>()({
        name: pokemonName,
      })
    const pokemonLowerCase = pokemonFind.name.toLowerCase()

    const pokemon = await prisma.pokemons.findMany({
      where: {
        OR: [
          {
            name: {
              startsWith: pokemonFind.name,
            },
          },
          {
            name: {
              startsWith: pokemonLowerCase,
            },
          },
        ],
      },
    })
    console.timeEnd("Find Pokemons")
    return reply.send(pokemon)
  })
}
