import React, { createContext, FC, useEffect, useState } from 'react'
import axios from 'axios'
import { CityType } from '../slices/WorldWiseSlice'
import { v4 } from 'uuid'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../slices/selectors'
import { useNavigate } from 'react-router-dom'

export interface IAppLayoutContextProps {
  children: React.ReactNode
}

type CoordsType = {
  lat: number
  lng: number
}

type LayoutContext = {
  coordinates: CoordsType | null
  setCoordinates: Function
  setCheckedCity: (city: CityType | null) => void
  city: CityType | null
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LayoutContext = createContext<LayoutContext | null>(null)

export const AppLayoutContext: FC<IAppLayoutContextProps> = ({ children }) => {
  const [coordinates, setCoordinates] = useState<CoordsType | null>(null)
  const [checkedCity, setCheckedCity] = useState<CityType | null>(null)
  const currentUser = useSelector(currentUserSelector)
  const navigate = useNavigate()

  useEffect(() => {
    if (coordinates) {
      const getCoordsInfo = async () => {
        try {
          const res = await axios.get(
            'https://nominatim.openstreetmap.org/reverse',
            {
              params: {
                format: 'json',
                lat: coordinates.lat,
                lon: coordinates.lng,
                'accept-language': 'en',
              },
            },
          )
          const info = res.data.address
          if (info.city || info.village || info.county) {
            const cityName = () => {
              if (info.city) return info.city
              if (info.town) return info.town
              if (info.village) return `village ${info.village}`
              if (info.county) return `county ${info.county}`
            }
            setCheckedCity({
              cityName: cityName(),
              country: info.country,
              emoji: info.country_code,
              date: '',
              notes: '',
              position: {
                lat: res.data.lat,
                lng: res.data.lon,
              },
              id: v4(),
            })
            return
          }
          setCheckedCity(null)
        } catch (err) {
          console.log(err)
        } finally {
          setCoordinates(null)
        }
      }
      getCoordsInfo()
    }
  }, [coordinates])

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])


  return (
    <LayoutContext.Provider
      value={{ coordinates, setCoordinates, city: checkedCity, setCheckedCity }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
