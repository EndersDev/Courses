import axios from 'axios'

const API_URL = 'http://localhost:8080'

function fetchProducts() {
	return axios(`${API_URL}/products`)
}
export default fetchProducts
