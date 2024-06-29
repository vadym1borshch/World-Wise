import { SxProps } from '@mui/material'

export const formStyles: SxProps = {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  '& .inputs-container': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  '& .buttons-container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
}
