import { FC } from 'react'
import { Box, Button, TextField } from '@mui/material'

export const Form: FC = () => {
  return (
    <Box
      sx={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        <TextField />
        <TextField />
        <TextField />
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0'
      }}>
        <Button>add</Button>
        <Button>back</Button>
      </Box>
    </Box>
  )
}
