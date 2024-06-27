import React, { FC } from 'react'
import { Box } from '@mui/material'
import { City } from '../City/City'
import { useSelector } from 'react-redux'
import { citiesSelector } from '../../slices/selectors'
import { citiesStyles } from './CitiesStyles'

export const Cities: FC = () => {
  const cities = useSelector(citiesSelector)
  return (
    <Box sx={citiesStyles}>
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </Box>
  )
}