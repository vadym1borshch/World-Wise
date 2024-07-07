import React, { FC } from 'react'
import { Box } from '@mui/material'
import { City } from '../City/City'
import { useSelector } from 'react-redux'
import { citiesSelector } from '../../slices/selectors'
import { citiesStyles } from './CitiesStyles'
import useWindowSize from '../../hooks/useWindowSize'

export const Cities: FC = () => {
  const cities = useSelector(citiesSelector)
  const { height } = useWindowSize(80)

  return (
    <Box sx={{...citiesStyles, height: height}} >
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </Box>
  )
}
