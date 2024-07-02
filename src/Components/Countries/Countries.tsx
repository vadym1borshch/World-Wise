import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { citiesSelector } from '../../slices/selectors'
import Flag from 'react-world-flags'
import { v4 } from 'uuid'
import { CountryType } from '../../slices/WorldWiseSlice'

export const Countries: FC = () => {
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
        width: '90%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '10px',
        overflow: 'auto',
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)',
        marginBottom: 'auto',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {countries.map((country) => {
        return (
          <Box
            key={country.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '170px',
              height: '100px',
              backgroundColor: 'whitesmoke',
              borderRadius: '10px',
            }}
          >
            <Flag
              code={country.countryCode.toUpperCase()}
              style={{ width: '50px', height: '50px' }}
            />
            <Box>{country.name}</Box>
          </Box>
        )
      })}
    </Box>
  )
}
