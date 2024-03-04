/// <reference types="@sveltejs/kit" />
export declare const load: () => Promise<{
	form: import("sveltekit-superforms").SuperValidated<
		{
			number: number
			name: string
			price: string
			quantity: number
			rarity: string
			collection: string
		},
		any,
		{
			number: number
			name: string
			price: string
			quantity: number
			rarity: string
			collection: string
		}
	>
	formReturn: import("sveltekit-superforms").SuperValidated<
		{
			number: number
			name: string
			price: string
			quantity: number
			rarity: string
			collection: string
		},
		any,
		{
			number: number
			name: string
			price: string
			quantity: number
			rarity: string
			collection: string
		}
	>
}>
export declare const actions: {
	default: ({ request }: import("./$types").RequestEvent) => Promise<
		| import("@sveltejs/kit").ActionFailure<{
				form: import("sveltekit-superforms").SuperValidated<
					{
						number: number
						name: string
						price: string
						quantity: number
						rarity: string
						collection: string
					},
					any,
					{
						number: number
						name: string
						price: string
						quantity: number
						rarity: string
						collection: string
					}
				>
		  }>
		| {
				form: import("sveltekit-superforms").SuperValidated<
					{
						number: number
						name: string
						price: string
						quantity: number
						rarity: string
						collection: string
					},
					any,
					{
						number: number
						name: string
						price: string
						quantity: number
						rarity: string
						collection: string
					}
				>
		  }
	>
}
