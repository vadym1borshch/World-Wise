import { FC } from 'react'
import { Box } from '@mui/material'
import { CityType } from '../../slices/WorldWiseSlice'
import { cityStyles } from './CityStyles'

interface ICityProps {
  city: CityType
}

export const City: FC<ICityProps> = ({ city }) => {
  return (
    <Box sx={cityStyles} onClick={() => console.log(city)}>
      <span className="city_name">{city.cityName}</span>
      <span className="country_flug">{city.emoji}</span>
    </Box>
  )
}
