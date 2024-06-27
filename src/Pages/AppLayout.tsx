import { FC } from 'react'
import { Box } from '@mui/material'
import { SideBar } from '../Components/SideBar/SideBar'
import { Map } from '../Components/Map/Map'
import { User } from '../Components/User/User'
import { appLayoutStyles } from './AppLayoutStyles'

export const AppLayout: FC = () => {
  return (
    <Box sx={appLayoutStyles}>
      <SideBar />
      <Map />
      <User />
    </Box>
  )
}
