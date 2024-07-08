import { SxProps } from '@mui/material'

export const navBarStyles: SxProps = {
  display: 'flex',
  margin: '10px',
  position: 'relative',
  zIndex: 100,
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '40px',
  '& .login': {
    backgroundColor: '#09f459',
    color: 'white',
    '&.active': {
      color: '#fff',
    },
  },
  '& a': {
    textDecoration: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '5px',
    width: '60px',
    textAlign: 'center',
    '&.active': {
      color: '#09f459',
    },
  },
  '& .logo_container': {
    '& img': {
      height: '30px',
      width: '120px',

    },
  },
  '& .links_container': {
    position: "relative",
    display: 'flex',
    gap: 3,
  },
}
