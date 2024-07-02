import { SxProps } from '@mui/material'

export const sideBarStyles: SxProps = {
  backgroundColor: 'gray',
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  position: 'relative',
  '& .navBar': {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    padding: '20px 0',
    '& span': {
      width: '100px',
      padding: '5px',
      textAlign: 'center',
      borderRadius: '10px',
    },
    '& .active': {
      backgroundColor: 'white',
      padding: '10px 0',
      borderRadius: '10px',
    },
  },
}
