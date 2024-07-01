import { SxProps } from '@mui/material'

export const cityInfoStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  alignItems: 'start',
  "& div": {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    "& span": {
      display: 'flex',
      gap: 1
    }
  },
  "& .city_name":{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1
  }
}
