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
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: "row"
    },

    '& span': {
      width: '100px',
      padding: '5px',
      textAlign: 'center',
      borderRadius: '10px',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 1,
      transition: 'color 0.3s',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: '10px',
        zIndex: -1,
        transform: 'scale(0)',
        transition: 'transform 0.3s',
      },
    },
    '& .active::before': {
      transform: 'scale(1)',
    },
  },
}
