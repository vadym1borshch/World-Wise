import { Box, useMediaQuery, useTheme } from '@mui/material'
import { FC, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
//@ts-ignore
import logo from '../../common/images/logo.png'
import { navBarStyles } from './NavBarStyles'
import { CustomMenu } from '../Menu/Menu'

export const NavBar: FC = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const content = useMemo(() => {
    if (isSmall) {
      return (
        <CustomMenu>
          <NavLink to={'/product'}>Product</NavLink>
          <NavLink to={'/pricing'}>Pricing</NavLink>
          <NavLink className="login" to={'/login'}>
            Login
          </NavLink>
        </CustomMenu>
      )
    }
    return (
      <Box className="links_container">
        <NavLink to={'/product'}>Product</NavLink>
        <NavLink to={'/pricing'}>Pricing</NavLink>
        <NavLink className="login" to={'/login'}>
          Login
        </NavLink>
      </Box>
    )
  }, [isSmall, open])

  return (
    <Box className="nav_bar-container" sx={navBarStyles}>
      <Box className="logo_container">
        <NavLink to={'/'}>
          <img src={logo} alt="logo" />
        </NavLink>
      </Box>
      {content}
    </Box>
  )
}
