import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { citiesSelector } from '../../slices/selectors'
import Flag from 'react-world-flags'
import { v4 } from 'uuid'
import { CountryType } from '../../slices/WorldWiseSlice'
import useWindowSize from '../../hooks/useWindowSize'
import { countriesStyles, countryStyle } from './CountriesStyles'

export const Countries: FC = () => {
  const { freeHeight } = useWindowSize(120)
  const cities = useSelector(citiesSelector)
  const countries: CountryType[] = cities.reduce((acc: CountryType[], el) => {
    if (!acc.some((country) => country.name === el.country)) {
      return [
        ...acc,
        {
          name: el.country,
          countryCode: el.emoji,
          id: v4(),
        },
      ]
    }
    return acc
  }, [])

  return (
    <Box
      sx={{
        ...countriesStyles,
        maxHeight: freeHeight,
      }}
    >
      {countries.map((country) => {
        return (
          <Box key={country.id} sx={countryStyle}>
            <Flag className="flag" code={country.countryCode.toUpperCase()} />
            <Box>{country.name}</Box>
          </Box>
        )
      })}
    </Box>
  )
}
