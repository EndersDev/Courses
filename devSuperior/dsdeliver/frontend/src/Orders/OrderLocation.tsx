import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchLocalMapBox } from '../api'
import { Place } from './types'
import AsyncSelect from 'react-select/async'

const initialPosition = {
	position: {
		lat: -23.5146528,
		lng: -46.4273401,
	},
}

function OrderLocation() {
	const [address, setAddress] = useState<Place>(initialPosition)

	const loadOptions = async (
		inputValue: string,
		callback: (places: Place[]) => void
	) => {
		const response = await fetchLocalMapBox(inputValue)
		const places = response.data.features.map((item: any) => {
			return {
				label: item.place_name,
				value: item.place_name,
				position: {
					lat: item.center[1],
					lng: item.center[0],
				},
				place: item.place_name,
			}
		})
		callback(places)
	}

	const handleChangeSelect = (place: Place) => {
		setAddress(place)
		// onChangeLocation({
		// 	latitude: place.position.lat,
		// 	longitude: place.position.lng,
		// 	address: place.label!,
		// })
	}

	return (
		<div className='order-location-container'>
			<div className='order-location-content'>
				<h3 className='order-location-title'>
					Selecione onde o pedido deve ser entregue:
				</h3>
				<div className='filter-container'>
					<AsyncSelect
						placeholder='Digite o Endereço'
						className='filter'
						loadOptions={loadOptions}
						onChange={(place) => handleChangeSelect(place as Place)}
					/>
				</div>

				<MapContainer center={address.position} zoom={13} scrollWheelZoom>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={address.position}>
						<Popup>Endereço Marcado</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	)
}

export default OrderLocation
