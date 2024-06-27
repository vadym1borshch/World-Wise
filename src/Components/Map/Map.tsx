import { FC, useContext } from 'react'
import { Box } from '@mui/material'
import {
  Popup,
  Marker,
  TileLayer,
  MapContainer,
  useMapEvents,
} from 'react-leaflet'
import { mapStyles } from './MapStyles'
import { useNavigate } from 'react-router-dom'
import { LayoutContext } from '../../context/AppLayoutContext'


export const Map: FC = () => {
  const navigate = useNavigate()
  const context = useContext(LayoutContext)

  const mapClickHandler = (e: any) => {
    context?.setCoordinates({
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    })
    navigate('form')
  }
  return (
    <Box sx={mapStyles}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ClickHandler handleClick={mapClickHandler} />
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
