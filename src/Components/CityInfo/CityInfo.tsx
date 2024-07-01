import React, { FC, useContext, useEffect } from 'react'
import { Box } from '@mui/material'
import { LayoutContext } from '../../context/AppLayoutContext'
import Flag from 'react-world-flags'
import { BackButton } from '../BackButton/BackButton'
import { cityInfoStyles } from './cityInfoStyles'
import { useNavigate } from 'react-router-dom'

interface ICityInfoProps {}

export const CityInfo: FC<ICityInfoProps> = () => {
  const navigate = useNavigate()
  const contextCity = useContext(LayoutContext)
  const city = contextCity?.city!

  useEffect(() => {
    if (!city) {
      navigate('/app/cities')
    }
  }, [city, navigate])

  if (!city) {
    return <>No city found.</>
  }

  return (
    <Box sx={cityInfoStyles}>
      <Box className="city_name">
        <span>
          <Flag
            code={city.emoji.toUpperCase()}
            style={{ width: '30px', height: '30px' }}
          />
        </span>
        <span> {city.cityName}</span>
      </Box>
      <Box className="was_in_city">
        <span>you went to {city.cityName} on</span>
        <span> {city.date} </span>
      </Box>
      <Box className="notes">
        <span>Notes</span>
        {city.notes}
      </Box>
      <Box className="learn_more">learn more wiki</Box>
      <BackButton>Back</BackButton>
    </Box>
  )
}
