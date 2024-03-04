import { z } from "zod"
export declare const Pokemon: z.ZodObject<
	{
		name: z.ZodString
		number: z.ZodNumber
		price: z.ZodString
		quantity: z.ZodNumber
		rarity: z.ZodString
		collection: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		number: number
		name: string
		price: string
		quantity: number
		rarity: string
		collection: string
	},
	{
		number: number
		name: string
		price: string
		quantity: number
		rarity: string
		collection: string
	}
>
export type pokemon = z.infer<typeof Pokemon>
