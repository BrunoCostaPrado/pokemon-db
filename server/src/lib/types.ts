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

export const updatePokemonInfo = z.object({
	pokemonNumber: z.number().int()
	// pokemonPrice: z.string(),
	// pokemonQuantity: z.number(),
	// pokemonRarity: z.string(),
	// pokemonCollection: z.string()
})

const updatePokemonParamsType = z.object({
	pokemonNumber: z.number(),
	pokemonPrice: z.string(),
	pokemonQuantity: z.number(),
	pokemonRarity: z.string(),
	pokemonCollection: z.string()
})

export type updatePokemonParamsType = z.infer<typeof updatePokemonParamsType>

const UpdatePokemonInfo = z.object({
	pokemonName: z.string().optional(),
	pokemonNumber: z.number().optional(),
	pokemonPrice: z.string().optional(),
	pokemonQuantity: z.number().optional(),
	pokemonRarity: z.string().optional(),
	pokemonCollection: z.string().optional()
})

export type UpdatePokemonInfo = z.infer<typeof UpdatePokemonInfo>

/// <reference path="./types.d.ts" />
