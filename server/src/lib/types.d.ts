import { z } from "zod"
declare const Pokemon: z.ZodObject<
	{
		name: z.ZodString
		number: z.ZodNumber
		price: z.ZodString
		quantity: z.ZodOptional<z.ZodNumber>
		rarity: z.ZodString
		collection: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		number: number
		name: string
		price: string
		rarity: string
		collection: string
		quantity?: number | undefined
	},
	{
		number: number
		name: string
		price: string
		rarity: string
		collection: string
		quantity?: number | undefined
	}
>
export type pokemon = z.infer<typeof Pokemon>
declare const findPokemonName: z.ZodObject<
	{
		name: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		name: string
	},
	{
		name: string
	}
>
export type findpokemonname = z.infer<typeof findPokemonName>
declare const findPokemonId: z.ZodObject<
	{
		id: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		id: string
	},
	{
		id: string
	}
>
export type findpokemonid = z.infer<typeof findPokemonId>
export declare const getPokemonParams: z.ZodObject<
	{
		pokemonId: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		pokemonId: string
	},
	{
		pokemonId: string
	}
>
export {}
