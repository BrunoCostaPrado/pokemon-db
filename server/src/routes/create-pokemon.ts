import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "$lib"

export async function createPokemon(app: FastifyInstance) {
	try {
		app.post("/create-pokemon", async (request, reply) => {
			const createPokemon = z.object({
				name: z.string(),
				number: z.number(),
				price: z.string(),
				rarity: z.string(),
				collection: z.string(),
				quantity: z.number().optional()
			})

			const { name, number, price, rarity, collection, quantity } = createPokemon.parse(
				request.body
			)

			const pokemon = await prisma.pokemons.create({
				data: {
					name,
					number,
					price,
					rarity,
					collection,
					quantity
				}
			})

			return reply.status(201).send({ pokemonId: pokemon.id, name: pokemon.name })
		})
	} catch (e) {
		console.log(e)
	}
}
