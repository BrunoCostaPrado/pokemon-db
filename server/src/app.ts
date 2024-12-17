import { app, host, port } from "./lib/fastify"

import cors from "@fastify/cors"
import websocket from "@fastify/websocket"
import { createPokemon } from "./routes/create-pokemon"
import { deletePokemons } from "./routes/delete-pokemon"
import { deleteAll } from "./routes/deleteAll"
import { getPokemons } from "./routes/get-all-pokemon"
import { getPokemon } from "./routes/get-pokemon"
import { getPokemonByName } from "./routes/get-pokemon-name"
import { seed } from "./routes/seed"

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
  origin: "*",
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
