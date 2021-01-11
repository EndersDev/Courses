import './Orders.css'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProductsList from './ProductsList/ProductsList'
import OrderLocation from './OrderLocation'
import { Product, OrderLocationData } from './types'
import { fetchProducts } from '../api'
import OrderSumary from './OrderSumary'
import Footer from '../Footer/Footer'
import { checkIsSelected } from './helpers'

function Orders() {
	const [products, setProducts] = useState<Product[]>([])
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

	const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
	//Vigia os valores de endereço do pedido

	useEffect(() => {
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error))
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
			<Footer />
		</div>
	)
}
export default Orders
