import { app, prisma } from "$lib"
//import { FastifyInstance } from "fastify"

export async function getPokemons(/*app: FastifyInstance*/) {
  app.get("/getPokemons", async (request, reply) => {
    console.time("find Pokemons")
    const pokemons = await prisma.pokemons.findMany()

    console.timeEnd("find Pokemons")
    return reply.status(202).send(pokemons)
  })
}
