import React, { FC, ReactNode, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuContainer, menuStyles } from './MenuStyles'
import { Box } from '@mui/material'

interface IMenuProps {
  children: ReactNode
}

export const CustomMenu: FC<IMenuProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        sx={MenuContainer}
        id="button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        sx={menuStyles}
        id="menu"
        aria-labelledby="button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Menu>
    </Box>
  )
}
