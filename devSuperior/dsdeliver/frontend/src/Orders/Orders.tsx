import { toast } from 'react-toastify'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProductsList from './ProductsList/ProductsList'
import OrderLocation from './OrderLocation'
import { Product, OrderLocationData } from './types'
import { fetchProducts, saveOrder } from '../api'
import OrderSumary from './OrderSumary'
import { checkIsSelected } from './helpers'
import './Orders.css'

function Orders() {
	const [products, setProducts] = useState<Product[]>([])
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
	//Vigia os valores de endereço do pedido
	const totalPrice = selectedProducts.reduce((sum, item) => {
		return sum + item.price
	}, 0)

	useEffect(() => {
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => toast.warning('Erro ao listar produtos'))
	}, [])

	const handleSelectProduct = (product: Product) => {
		const isAlreadySelected = checkIsSelected(selectedProducts, product)

		if (isAlreadySelected) {
			const selected = selectedProducts.filter((item) => item.id !== product.id)
			setSelectedProducts(selected)
		} else {
			setSelectedProducts((previous) => [...previous, product])
		}
	}

	const handleSubmit = () => {
		const productsIds = selectedProducts.map(({ id }) => ({ id }))
		const payload = {
			...orderLocation!,
			products: productsIds,
		}

		saveOrder(payload)
			.then((response) => {
				toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`)
				setSelectedProducts([])
			})
			.catch(() => {
				toast.warning('Erro ao enviar pedido')
			})
	}

	return (
		<div className='orders-container'>
			<Header />
			<ProductsList
				products={products}
				onSelectProduct={handleSelectProduct}
				selectedProducts={selectedProducts}
			/>
			<OrderLocation
				onChangeLocation={(location) => setOrderLocation(location)}
			/>
			<OrderSumary
				amount={selectedProducts.length}
				totalPrice={totalPrice}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default Orders
