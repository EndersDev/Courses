import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import Orders from './Orders/Orders'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/orders'>
					<NavBar />

					<Orders />
					<Footer />
				</Route>

				<Route path='/'>
					<NavBar />

					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
