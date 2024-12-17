<script lang="ts">
import type { PageData } from "./$types"

import { DataHandler, Datatable, Th, ThFilter } from "@vincjo/datatables"
export let data: PageData

const { poke } = data

const handler = new DataHandler(poke, { rowsPerPage: 50 })
const rows = handler.getRows()
</script>

<Datatable {handler}>
	<table>
		<thead>
			<tr>
				<Th {handler} orderBy="name">Name</Th>
				<Th {handler} orderBy="number">Number</Th>
				<Th {handler} orderBy="price">Price</Th>
				<Th {handler} orderBy="quantity">Quantity</Th>
				<Th {handler} orderBy="rarity">Rarity</Th>
				<Th {handler} orderBy="email">Collection</Th>
			</tr>
			<tr>
				<ThFilter {handler} filterBy="name" />
				<ThFilter {handler} filterBy="number" />
				<ThFilter {handler} filterBy="price" />
				<ThFilter {handler} filterBy="quantity" />
				<ThFilter {handler} filterBy="rarity" />
				<ThFilter {handler} filterBy="collection" />
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.name}</td>
					<td>{row.number}</td>
					<td>{row.price}</td>
					<td>{row.quantity}</td>
					<td>{row.rarity}</td>
					<td>{row.collection}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Datatable>

<style>
	thead {
		background: #fff;
	}
	tbody td {
		border: 1px solid #f5f5f5;
		padding: 4px 20px;
	}
	tbody tr {
		transition: all, 0.2s;
	}
	tbody tr:hover {
		background: #f5f5f5;
	}
</style>
