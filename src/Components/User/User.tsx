import { FC } from 'react'
import { Box, Button } from '@mui/material'

export const User: FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        backgroundColor: 'black',
        width: 300,
        height: 60,
        color: 'white',
        right: 0,
        zIndex: 10,
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: "0 5px",
        borderRadius: '10px'
      }}
    >
      <span>image</span>
      <span>userName</span>
      <Button>logout</Button>
    </Box>
  )
}
