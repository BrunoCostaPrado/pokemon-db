import { FastifyReply, FastifyRequest } from "fastify"
// import { server } from "$lib/fastify"

export async function registerUserHandler(request: FastifyRequest, reply: FastifyReply) {
	try {
		return reply.status(201).send({ message: "Internal Server Error" })
	} catch (e) {
		console.log(e)
		return reply.status(500).send({ message: "Internal Server Error" })
	}
}

// export async function getPokemonHandler() {
// 	const pokemons = await findPokemons()

// 	return pokemons
// }
