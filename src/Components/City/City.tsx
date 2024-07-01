import React, { FC, useContext } from 'react'
import { Box, Button } from '@mui/material'
import {
  CityType,
  deleteCity,
  deleteCityAction,
} from '../../slices/WorldWiseSlice'
import { cityStyles } from './CityStyles'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import Flag from 'react-world-flags'
import { useNavigate } from 'react-router-dom'
import { LayoutContext } from '../../context/AppLayoutContext'

interface ICityProps {
  city: CityType
}

export const City: FC<ICityProps> = ({ city }) => {
  const navigate = useNavigate()
  const context = useContext(LayoutContext)
  const dispatch = useDispatch<AppDispatch>()
  const deleteCityHandler = () => {
    dispatch(deleteCityAction(city.id))
    deleteCity(city.id)
  }

  const onCityClick = () => {
    if (context?.setCheckedCity) {
      navigate('/app/cityinfo')
      context.setCheckedCity(city)
    }
  }
  return (
    <Box sx={cityStyles} onClick={onCityClick}>
      <span className="city_name">{city.cityName}</span>
      <Box className="flag-container">
        <span className="country_flug">
          <Flag className="flag" code={city.emoji.toUpperCase()} />
        </span>
        <Button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation()
            deleteCityHandler()
          }}
        >
          x
        </Button>
      </Box>
    </Box>
  )
}
