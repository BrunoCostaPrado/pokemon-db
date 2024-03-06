import { z } from "zod"

const Pokemon = z.object({
	name: z.string(),
	number: z.number(),
	price: z.string(),
	quantity: z.number().optional(),
	rarity: z.string(),
	collection: z.string()
})

export type pokemon = z.infer<typeof Pokemon>

const findPokemonName = z.object({
	name: z.string()
})

export type findpokemonname = z.infer<typeof findPokemonName>

const findPokemonId = z.object({
	id: z.string().uuid()
})

export type findpokemonid = z.infer<typeof findPokemonId>

export const getPokemonParams = z.object({
	pokemonId: z.string().uuid()
})

/// <reference path="./types.d.ts" />
