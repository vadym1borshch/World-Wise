import { SxProps } from '@mui/material'

export const countriesStyles:SxProps = {
  width: '90%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '10px',
  overflow: 'auto',
  height: 'auto',
  marginBottom: 'auto',
  boxSizing: 'border-box',
  position: 'relative',
}

export const countryStyle:SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '170px',
  height: '100px',
  backgroundColor: 'whitesmoke',
  borderRadius: '10px',
  "& .flag": {
    width: '50px', height: '50px'
  }
}