export type Product = {
	id: number
	name: string
	price: number
	description: string
	imageUri: string
}

export type Place = {
	label?: string //endereço
	value?: string //numero
	position: {
		lat: number
		lng: number
	}
}

export type OrderLocationData = {
	address: string
	latitude: number
	longitude: number
}
