function payment() {
	return (
		<div>
			<h1>oi</h1>
		</div>
	)
}

export default payment
/*



const handleSubmit = () => {
	const productsIds = selectedProducts.map(({ id }) => ({ id }))
	const payload = {
		...orderLocation!,
		products: productsIds,
	}

	saveOrder(payload)
		.then(() => {
			toast.error('Pedido enviado com sucesso!')
			setSelectedProducts([])
		})
		.catch(() => {
			toast.warning('Erro ao enviar pedido')
		})
}*/
