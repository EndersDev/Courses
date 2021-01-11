import { Product } from '../types'
import { formatPrice } from '../helpers'

type Props = {
	product: Product
	isSelected: boolean
	onSelectProduct: (product: Product) => void
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
	return (
		<div
			className={`product-card-container ${isSelected ? 'selected' : ''}`}
			onClick={() => onSelectProduct(product)}
		>
			<h3 className='product-card-title'>{product.name}</h3>

			<img
				className='product-card-image'
				src={product.imageUri}
				alt={product.name}
			/>
			<h3 className='product-card-price'>{formatPrice(product.price)}</h3>

			<div className='product-card-description'>
				<h3>Descrição</h3>
				<p>{product.description}</p>
			</div>
		</div>
	)
}

export default ProductCard
