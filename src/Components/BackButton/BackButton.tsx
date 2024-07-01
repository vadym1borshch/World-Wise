import { Button, Icon, SxProps } from '@mui/material'
import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface IBackButtonProps {
  sx?: SxProps
  children: string
  icon?: ReactNode
  callback?: () => void
}

export const BackButton: FC<IBackButtonProps> = ({
  sx,
  icon,
  children,
  callback,
}) => {
  const navigate = useNavigate()
  return (
    <Button
      sx={{ ...sx }}
      onClick={() => {
        if (callback) callback()
        navigate(-1)
      }}
    >
      {icon && <Icon>{icon}</Icon>}
      {children}
    </Button>
  )
}
