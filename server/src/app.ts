import cors from "@fastify/cors"
import websocket from "@fastify/websocket"
import { host, port, app } from "$lib"
import {
	createPokemon,
	getPokemons,
	getPokemon,
	getPokemonByName,
	seed,
	deleteAll,
	deletePokemons
} from "$routes"

app.get("/", async (req, reply) => {
	return await reply.status(202).send("hello")
})

app.register(seed, { prefix: "/seed" })
app.register(websocket)

app.register(deleteAll)
app.register(deletePokemons)

app.register(getPokemons)
app.register(getPokemon)
app.register(getPokemonByName)

app.register(createPokemon)

await app.register(cors, {
	origin: "*"
})

async function main() {
	try {
		await app.listen({ port, host })

		console.log(`Server listening on ${host}:${port}`)
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
}

main()
