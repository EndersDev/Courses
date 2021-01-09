import './Footer.css'

function Footer() {
	return (
		<footer className='main-footer'>
			App desenvolvido durante a 2ª ed. do evento
			<b> Semana DevSuperior</b>
			<div className='footer-icons'>
				<a href='' target='_new '>
					<img
						src='https://raw.githubusercontent.com/devsuperior/sds2/master/aula2/Footer/instagram.svg'
						alt='Instagram'
					/>
				</a>
				<a href='' target='_new '>
					<img
						src='https://raw.githubusercontent.com/devsuperior/sds2/master/aula2/Footer/linkedin.svg'
						alt='LinkedIn'
					/>
				</a>
				<a href='' target='_new '>
					<img
						src='https://raw.githubusercontent.com/devsuperior/sds2/master/aula2/Footer/youtube.svg'
						alt='Youtube'
					/>
				</a>
			</div>
		</footer>
	)
}

export default Footer
