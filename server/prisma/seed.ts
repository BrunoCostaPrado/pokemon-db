import { faker } from "@faker-js/faker"
import { pokemon, prisma } from "../src/lib"

console.time("Create Pokemons")
export async function seed() {
	console.time("Deleted Pokemons")
	await prisma.pokemons.deleteMany({})

	const amountOfPokemons = 300
	const pokemon: pokemon[] = []

	for (let i = 0; i < amountOfPokemons; i++) {
		const firstName = faker.person.firstName()
		const lastName = faker.person.lastName()

		pokemon.push({
			name: `${firstName} ${lastName}`,
			number: faker.number.int(100000),
			price: faker.commerce.price(),
			collection: faker.commerce.productName(),
			rarity: faker.commerce.productMaterial(),
			quantity: faker.number.int(10000)
		})
	}

	const addPokemon = async () =>
		await prisma.pokemons.createMany({
			data: pokemon
		})
	addPokemon()
}

seed()
	.catch((e) => {
		console.log(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})

console.timeEnd("Create Pokemons")
