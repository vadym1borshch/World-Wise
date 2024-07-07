import { SxProps } from '@mui/material'

export const loginStyles:SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  marginTop: 1,
  height: '100vh',
  "& .error": {
    color: "#f44336",
    fontSize: '12px'
  }
}