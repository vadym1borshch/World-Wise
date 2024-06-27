import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { countriesSelector } from '../../slices/selectors'
import Flag from 'react-world-flags'

export const Countries: FC = () => {
  const countries = useSelector(countriesSelector)
  if (!countries.length) return <>LOADING...</>
  return (
    <Box sx={{ width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
      {countries.map((country) => (
        <Box key={country?.id} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '170px',
          height: '100px',
          backgroundColor: 'whitesmoke',
          borderRadius: '10px'
        }}>
          <Flag
            code={country?.countryCode.toUpperCase()}
            style={{ width: '50px', height: '50px' }}
          />
          <Box>{country?.country}</Box>
        </Box>
      ))}
    </Box>
  )
}
