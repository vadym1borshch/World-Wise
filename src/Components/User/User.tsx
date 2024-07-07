import { FC, useState } from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { userStyles } from './UserStyles'
import { useDispatch, useSelector } from 'react-redux'
import { currentUserSelector } from '../../slices/selectors'
import { AppDispatch } from '../../store/store'
import { logoutAction } from '../../slices/WorldWiseSlice'

export const User: FC = () => {
  const [open, setOpen] = useState(false)
  const currentUser = useSelector(currentUserSelector)
  const dispatch = useDispatch<AppDispatch>()
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const handleOpen = () => {
    if (!isTablet) return
    setOpen(!open)
  }
  const logoutHandler = () => {
    dispatch(logoutAction())
  }
  console.log(currentUser)
  return (
    <Box
      onClick={handleOpen}
      sx={{
        ...userStyles,
        width: { xs: `${!open ? '50px' : '300px'}`, md: `300px` },
        justifyContent: {
          xs: `${!open ? 'center' : 'space-between'}`,
          md: 'space-between',
        },
      }}
    >
      {isTablet && !open ? (
        <span>
          <MenuIcon />
        </span>
      ) : (
        <>
          <span>image</span>
          <span>{currentUser?.name}</span>
          <Button onClick={logoutHandler}>logout</Button>

          {open && (
            <Button className="close" onClick={() => setOpen(false)}>
              x
            </Button>
          )}
        </>
      )}
    </Box>
  )
}
