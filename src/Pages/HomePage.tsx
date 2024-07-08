import { FC } from 'react'
import { Box } from '@mui/material'
import { NavBar } from '../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { descriptionsStyles, homePageStyles } from './HomePageStyles'
//@ts-ignore
import background from '../common/images/bg.jpg'

export const HomePage: FC = () => {
  const { freeHeight } = useWindowSize(30)
  return (
    <Box
      sx={{
        ...homePageStyles,
        backgroundImage: `url(${background})`,
      }}
    >
      <NavBar />
      <Box
        sx={{
          ...descriptionsStyles,
          height: freeHeight,
        }}
      >
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login">Start tracking now</Link>
      </Box>
    </Box>
  )
}
