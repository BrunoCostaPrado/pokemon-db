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
export declare const updatePokemonInfo: z.ZodObject<
	{
		pokemonNumber: z.ZodNumber
	},
	"strip",
	z.ZodTypeAny,
	{
		pokemonNumber: number
	},
	{
		pokemonNumber: number
	}
>
declare const updatePokemonParamsType: z.ZodObject<
	{
		pokemonNumber: z.ZodNumber
		pokemonPrice: z.ZodString
		pokemonQuantity: z.ZodNumber
		pokemonRarity: z.ZodString
		pokemonCollection: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		pokemonNumber: number
		pokemonPrice: string
		pokemonQuantity: number
		pokemonRarity: string
		pokemonCollection: string
	},
	{
		pokemonNumber: number
		pokemonPrice: string
		pokemonQuantity: number
		pokemonRarity: string
		pokemonCollection: string
	}
>
export type updatePokemonParamsType = z.infer<typeof updatePokemonParamsType>
declare const UpdatePokemonInfo: z.ZodObject<
	{
		pokemonName: z.ZodOptional<z.ZodString>
		pokemonNumber: z.ZodOptional<z.ZodNumber>
		pokemonPrice: z.ZodOptional<z.ZodString>
		pokemonQuantity: z.ZodOptional<z.ZodNumber>
		pokemonRarity: z.ZodOptional<z.ZodString>
		pokemonCollection: z.ZodOptional<z.ZodString>
	},
	"strip",
	z.ZodTypeAny,
	{
		pokemonName?: string | undefined
		pokemonNumber?: number | undefined
		pokemonPrice?: string | undefined
		pokemonQuantity?: number | undefined
		pokemonRarity?: string | undefined
		pokemonCollection?: string | undefined
	},
	{
		pokemonName?: string | undefined
		pokemonNumber?: number | undefined
		pokemonPrice?: string | undefined
		pokemonQuantity?: number | undefined
		pokemonRarity?: string | undefined
		pokemonCollection?: string | undefined
	}
>
export type UpdatePokemonInfo = z.infer<typeof UpdatePokemonInfo>
export {}
//# sourceMappingURL=types.d.ts.map
