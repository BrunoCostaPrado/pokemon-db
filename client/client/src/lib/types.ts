import { z } from "zod"

export const Pokemon = z.object({
  name: z.string(),
  number: z.number(),
  price: z.string(),
  quantity: z.number(),
  rarity: z.string(),
  collection: z.string(),
})

export type pokemon = z.infer<typeof Pokemon>
