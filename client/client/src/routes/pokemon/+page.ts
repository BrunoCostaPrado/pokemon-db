import { urlGetAll } from "$api"
import type { PageLoad } from "./$types"
export const load = (async ({ fetch }) => {
  let poke = []
  const getPokemons = async () => {
    const res = await fetch(urlGetAll)
    const data = await res.json()

    return data
  }
  poke = await getPokemons()
  return {
    poke,
  }
}) satisfies PageLoad
