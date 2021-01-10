import { Product } from '../types'

type Props = {
	product: Product
}

function formatPrice(price: number) {
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2,
	})

	return formatter.format(price)
}

function ProductCard({ product }: Props) {
	return (
		<div className='product-card-container'>
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
