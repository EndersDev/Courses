import './Orders.css'
import { useEffect, useState } from 'react'
import Header from './Header'
import ProductsList from './ProductsList/ProductsList'
import OrderLocation from './OrderLocation'
import { Product, OrderLocationData } from './types'
import { fetchProducts } from '../api'

function Orders() {
	const [products, setProducts] = useState<Product[]>([])

	const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
	//Vigia os valores de endereço do pedido

	useEffect(() => {
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error))
	}, [])

	return (
		<div className='orders-container'>
			<Header />
			<ProductsList products={products} />
			<OrderLocation
				onChangeLocation={(location) => setOrderLocation(location)}
			/>
		</div>
	)
}
export default Orders
