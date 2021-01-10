import './Orders.css'
import { useEffect, useState } from 'react'
import Header from './Header'
import ProductsList from './ProductsList/ProductsList'
import { Product } from './types'
import fetchProducts from '../api'

function Orders() {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		fetchProducts()
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<div className='orders-container'>
				<Header />
				<ProductsList products={products} />
			</div>
		</>
	)
}
export default Orders
