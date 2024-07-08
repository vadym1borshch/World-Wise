import { SxProps } from '@mui/material'

export const MenuContainer:SxProps = {
  backgroundColor: '#09f459',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#09f459',
  },
}

export const menuStyles:SxProps = {
  '& .MuiPaper-root': {
    top: '10px !important',
    width: '80px',
    backgroundColor: '#7088a4', // фон меню
    '& .MuiList-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      margin: '10px 0',
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
  },
}