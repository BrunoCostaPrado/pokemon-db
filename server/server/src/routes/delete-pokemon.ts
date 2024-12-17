import { app, prisma } from "$lib"

import { z } from "zod"

export async function deletePokemons() {
  app.get("/deletePokemon/:pokemonId", async (request, reply) => {
    const getPokemonParams = z.object({
      pokemonId: z.string().uuid(),
    })
    const { pokemonId } = getPokemonParams.parse(request.params)

    // const pokemonFind: findpokemonid = Prisma.validator<Prisma.PokemonsWhereInput>()({
    // 	id: pokemonId
    // })

    const pokemon = await prisma.pokemons.delete({
      where: {
        id: pokemonId,
      },
    })
    const res = `${pokemon.name} has been deleted.`
    return reply.send(res)
  })
}
