import { json } from "@sveltejs/kit"
import { urlGetAll } from "$api"
import type { PageServerLoad } from "./$types"
import * as devalue from "devalue"

export const load: PageServerLoad = async ({ fetch }) => {
	const api = await fetch(urlGetAll, { method: "GET" })

	// const stringified = devalue.stringify(api)
	// const parse = devalue.parse(stringified)
	const parse = JSON.stringify(api)
	// return json(parse)
	return { parse }
	// return new Response(parse)
}
