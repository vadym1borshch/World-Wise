import { FC } from 'react'
import { Box } from '@mui/material'

export const User: FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        backgroundColor: 'black',
        width: 100,
        height: 20,
        color: 'white',
        right: 0,
        zIndex: 10,
        margin: '20px'
      }}
    >
      User
    </Box>
  )
}
