import { FC } from 'react'
import { Box } from '@mui/material'
import { NavBar } from '../Components/NavBar/NavBar'
//@ts-ignore
import background from '../common/images/bg.jpg'

export const HomePage: FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        minHeight: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed'
      }}
    >
      <NavBar />
      <Box>
        Home page
      </Box>

    </Box>
  )
}
