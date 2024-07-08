import { SxProps } from '@mui/material'

export const descriptionsStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  margin: 'auto 0',
  color: '#fff',
  overflow: 'auto',
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#09f459',
    borderRadius: '5px',
    padding: '5px',
  },
}

export const homePageStyles: SxProps = {
  minHeight: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  opacity: 1,
}
