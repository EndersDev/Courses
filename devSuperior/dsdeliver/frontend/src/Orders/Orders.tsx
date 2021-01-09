import './Orders.css'

import Header from './Header'
import ProductsList from './ProductsList/ProductsList'

function Orders() {
	return (
		<>
			<div className='orders-container'>
				<Header />
				<ProductsList />
			</div>
		</>
	)
}
export default Orders
