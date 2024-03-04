// import { redis } from "$lib"
// import { FastifyInstance, FastifyReply } from "fastify"

// async function clearCache(app: FastifyInstance, reply: FastifyReply) {
// 	try {
// 		const opts = {
// 			schema: {
// 				response: {
// 					200: {
// 						type: "object",
// 						properties: {
// 							on: { type: "boolean" }
// 						}
// 					}
// 				}
// 			}
// 		}

// 		app.get("/clear-cache", opts, async () => {
// 			await redis.del("users:all")
// 			reply.send({ on: true })
// 		})
// 	} catch (e) {
// 		console.log(e)
// 		return reply.send({
// 			error: e
// 		})
// 	}
// }

// export { clearCache }

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a.map((x) => x * 2)
