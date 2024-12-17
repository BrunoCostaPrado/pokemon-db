import { prisma } from "$lib"
import type { FastifyInstance } from "fastify"

export async function deleteAll(app: FastifyInstance) {
  app.get("/deleteAll", async (req, reply) => {
    console.time("Delete Pokemons")
    const del = await prisma.pokemons.deleteMany({})
    console.timeEnd("Delete Pokemons")
    return await reply.status(202).send(del)
  })
}
