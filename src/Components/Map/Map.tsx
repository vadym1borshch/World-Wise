import { FC, useContext, useEffect } from 'react'
import { Box } from '@mui/material'
import {
  Popup,
  Marker,
  TileLayer,
  MapContainer,
  useMapEvents,
  useMap,
} from 'react-leaflet'
import { mapStyles } from './MapStyles'
import { useNavigate } from 'react-router-dom'
import { LayoutContext } from '../../context/AppLayoutContext'
import { LatLngExpression } from 'leaflet'
import { useSelector } from 'react-redux'
import { citiesSelector } from '../../slices/selectors'

export const Map: FC = () => {
  const navigate = useNavigate()
  const context = useContext(LayoutContext)
  const cities = useSelector(citiesSelector)

  const centered = (): LatLngExpression | undefined => {
    if (context?.city) {
      const lat = context.city.position.lat
      const lng = context.city.position.lng
      return [lat, lng] as LatLngExpression
    }
    return [51.505, -0.09]
  }

  const mapClickHandler = (e: any) => {
    context?.setCoordinates({
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    })
    navigate('form')
  }

  centered()
  return (
    <Box sx={mapStyles}>
      <MapContainer center={centered()} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}

        <ClickHandler handleClick={mapClickHandler} />
        <MoveMap coordinates={centered} />
      </MapContainer>
    </Box>
  )
}

function ClickHandler({ handleClick }: { handleClick: (event: any) => void }) {
  const map = useMapEvents({
    click: (event) => {
      handleClick(event)
    },
  })

  return null
}

const MoveMap: FC<{ coordinates: any }> = ({ coordinates }) => {
  const map = useMap()

  useEffect(() => {
    if (coordinates) {
      map.setView(coordinates(), 8)
    }
  }, [coordinates, map])

  return null
}
