import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchLocalMapBox } from '../api'
import { Place, OrderLocationData } from './types'
import AsyncSelect from 'react-select/async'

const initialPosition = {
	position: {
		lat: -23.5146528,
		lng: -46.4273401,
	},
}

type Props = {
	onChangeLocation: (location: OrderLocationData) => void
}

function OrderLocation({ onChangeLocation }: Props) {
	const [address, setAddress] = useState<Place>(initialPosition)
	//Vigia os valores de endereço do mapa
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
		onChangeLocation({
			address: place.label!,
			latitude: place.position.lat,
			longitude: place.position.lng,
		})
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

				<MapContainer
					key={address.position.lat}
					center={address.position}
					zoom={13}
					scrollWheelZoom
				>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={address.position}>
						<Popup>
							{address.label}+{address.value}
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	)
}

export default OrderLocation
