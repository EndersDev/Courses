import ProductCard from './ProductCard'
import { Product } from '../types'

type Props = {
	products: Product[]
}

function ProductsList({ products }: Props) {
	return (
		<div className='products-list-container'>
			<div className='products-list-items'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductsList
