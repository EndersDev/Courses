import { disposeEmitNodes } from 'typescript'
import './home.css'

function Home() {
	return (
		<div className='home-container'>
			<div className='home-content'>
				<div className='home-actions'>
					<h1 className='home-title'>
						Faça seus pedidos <br />
						que entregamos <br />
						pra você !
					</h1>
					<h3 className='home-subtitle'>
						Escolha o seu pedido e em poucos minutos <br />
						levaremoss na sua porta
					</h3>
					<a href='' className='home-btn-order'>
						FAZER PEDIDO
					</a>
				</div>

				<img
					className='home-image'
					src='https://raw.githubusercontent.com/devsuperior/sds2/master/aula2/home/main.svg'
				/>
			</div>
		</div>
	)
}

export default Home
