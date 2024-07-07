import React, { FC, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { sideBarStyles } from './SideBarStyles'

export const SideBar: FC = () => {
  const navigate = useNavigate()

  const [active, setActive] = useState<string>('cities')

  const onclickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    navigate(e.currentTarget.id)
    setActive(e.currentTarget.id)
  }

  return (
    <Box
      sx={{
        ...sideBarStyles,
      }}
    >
      <Box className="navBar">
        <span
          id="cities"
          className={`${active === 'cities' ? 'active' : ''}`}
          onClick={onclickHandler}
        >
          Cities
        </span>
        <span
          id="countries"
          className={`${active === 'countries' ? 'active' : ''}`}
          onClick={onclickHandler}
        >
          Countries
        </span>
      </Box>
      <Outlet />
    </Box>
  )
}
