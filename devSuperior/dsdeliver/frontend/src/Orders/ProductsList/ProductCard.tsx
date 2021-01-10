import { Product } from '../types'

type Props = {
	product: Product
}

function ProductCard({ product }: Props) {
	return (
		<div className='product-card-container'>
			<h3 className='product-card-title'>{product.title}</h3>

			<img
				className='product-card-image'
				src='{product.imageUri}'
				alt='Produto'
			/>
			<h3 className='product-card-price'>{product.price}</h3>

			<div className='product-card-description'>
				<h3>Descrição</h3>
				<p>{product.description}</p>
			</div>
		</div>
	)
}

export default ProductCard
