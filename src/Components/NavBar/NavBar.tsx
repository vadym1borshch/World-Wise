import { Box } from '@mui/material'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar: FC = () => {
  return (
    <Box
      className="nav_bar-container"
      sx={{
        display: 'flex',
        gap: 3,
        margin: '10px',
        '& a': {
          textDecoration: 'none',
          backgroundColor: 'pink',
          borderRadius: '5px',
          color: 'white',
          padding: '5px',
          width: '60px',
          textAlign: 'center',
          '&.active': {
            backgroundColor: 'red',
          },
        },
      }}
    >
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/product'}>Product</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
    </Box>
  )
}
