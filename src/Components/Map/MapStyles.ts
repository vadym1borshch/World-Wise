import { SxProps } from '@mui/material'

export const mapStyles: SxProps = {
  backgroundColor: 'red',
  width: '50%',
  height: '100vh',
  zIndex: 1,
  '& .leaflet-container': {
    height: '100%',
  },
}
