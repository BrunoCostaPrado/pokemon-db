import { urlPost } from "$api"
import { Pokemon } from "$lib"
import { fail } from "@sveltejs/kit"
import * as devalue from "devalue"
import { superValidate } from "sveltekit-superforms"
import { zod } from "sveltekit-superforms/adapters"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(Pokemon))
  const formReturn = form

  return {
    form,
    formReturn,
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(Pokemon))

    // const formReturn = form
    if (!form.valid) {
      return fail(400, { form })
    }

    const stringified = devalue.stringify(form.data)
    const par = devalue.parse(stringified)

    const res = await fetch(urlPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(par),
    })
    const item = await res.json()

    console.log(item)

    return {
      form,
    }
  },
}
