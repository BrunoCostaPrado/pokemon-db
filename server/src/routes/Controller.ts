function aa() {
	const a = "a"
	return a
}
aa()

// import { FastifyReply } from "fastify"
// import { prisma, redis } from "$lib"

// export class Controller {
// 	static async find() {
// 		async function data(reply: FastifyReply) {
// 			try {
// 				const cacheKey = "pokemons:all"
// 				console.time("find pokemons")
// 				const cachedPokemons = await redis.get(cacheKey)

// 				if (cachedPokemons) {
// 					console.timeEnd("find pokemons")
// 					return reply.send(JSON.parse(cachedPokemons))
// 				}

// 				const pokemons = await prisma.pokemons.findMany()

// 				console.timeEnd("find pokemons")

// 				await redis.set(cacheKey, JSON.stringify(pokemons))
// 				return reply.send(pokemons)
// 			} catch (e) {
// 				console.log(e)
// 				return reply.send({
// 					error: e
// 				})
// 			}
// 		}
// 		return data
// 	}
// }
