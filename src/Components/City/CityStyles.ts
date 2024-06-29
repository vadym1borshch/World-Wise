import { SxProps } from '@mui/material'

export const cityStyles: SxProps = {
  width: '80%',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'beige',
  alignItems: 'center',
  borderRadius: '10px',
  padding: '0 10px',
  '& .flag-container': {
    display: 'flex',
    alignItems: 'center',
    '& .delete-button': {
      minWidth: 0,
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: "50%",
      margin: '0 10px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    '& .flag': {
      width: '20px',
      height: '20px',
    },
  },
}
