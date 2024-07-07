import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import {
  getUsers,
  resetErrorAction,
  setErrorAction,
} from '../slices/WorldWiseSlice'
import { currentUserSelector, errorSelector } from '../slices/selectors'
import { loginStyles } from './LoginStyles'

const fieldsErr = 'please, fill all fields'

export const Login: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector(errorSelector)
  const currentUser = useSelector(currentUserSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const loginHandler = useCallback(() => {
    if (!name || !email || !password) {
      dispatch(setErrorAction({ type: 'login', message: fieldsErr }))
      return
    }
    dispatch(getUsers({ name, email, password }))
    dispatch(resetErrorAction())
  }, [dispatch, email, name, password])

  const registerHandler = useCallback(() => {
    if (!name || !email || !password) {
      dispatch(setErrorAction({ type: 'register', message: fieldsErr }))
      return
    }
    console.log('register')
  }, [name, email, password, dispatch])

  const cancelRegistrationHandler = useCallback(() => {
    setEmail('')
    setName('')
    setPassword('')
    dispatch(resetErrorAction())
    navigate('/')
  }, [dispatch, navigate])

  console.log('currentUser', currentUser)
  console.log('error', error)

  const content = useMemo(() => {
    if (error) {
      if (error?.type === 'login') {
        return (
          <>
            <span className="error">{error.message}</span>
            <Button onClick={loginHandler}>Login</Button>
          </>
        )
      }
      if (error?.type === 'register') {
        return (
          <>
            <span className="error">{error.message}</span>
            <Button onClick={registerHandler}>Register</Button>
            <Button onClick={cancelRegistrationHandler}>Cancel</Button>
          </>
        )
      }
    }

    return <Button onClick={loginHandler}>Login</Button>
  }, [cancelRegistrationHandler, error, loginHandler, registerHandler])

  useEffect(() => {
    if (currentUser) {
      navigate('/app')
    }
  }, [currentUser, navigate])

  return (
    <Box>
      <Box sx={{ ...loginStyles }}>
        <TextField
          size="small"
          label="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextField
          size="small"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextField
          size="small"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        {content}
      </Box>
    </Box>
  )
}
