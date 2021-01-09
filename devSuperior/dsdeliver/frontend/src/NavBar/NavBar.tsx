import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<nav className='main-navbar'>
			<div id='logo-text'>
				<Link className='logo-text' to='/'>
					<img src='https://raw.githubusercontent.com/devsuperior/sds2/master/aula2/Navbar/logo.svg' />
				</Link>
				<Link className='logo-text' to='/'>
					DS Delivery
				</Link>
			</div>
		</nav>
	)
}

export default NavBar
