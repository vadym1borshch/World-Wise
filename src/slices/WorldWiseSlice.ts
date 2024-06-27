import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 } from 'uuid'

export type StatusType = 'succeeded' | 'loading' | 'failed' | 'idle'
type ResType = {
  data: {
    address: {
      country: string
      country_code: string
      district: string
      municipality: string
      postcode: string
      state: string
      village: string
    }
  }
}
export type CityType = {
  cityName: string
  country: string
  emoji: string
  date: string
  notes: string
  position: {
    lat: number
    lng: number
  }
  id: string
}
export type CountriesType = {
  id: string
  country: string
  countryCode: string
}

type StateType = {
  cities: CityType[]
  countries: (CountriesType | undefined)[]
  status: StatusType
  error: string | undefined
}

const initialState: StateType = {
  cities: [],
  countries: [],
  status: 'idle',
  error: undefined,
}

export const getCities = createAsyncThunk(
  'world_wise/getCities',
  async (query) => {
    const url = `http://localhost:9000/cities`

    const res = await axios.get(url)
    return res.data
  },
)

export const fetchCountries = createAsyncThunk(
  'world_wise/fetchCountries',
  async (cities: CityType[], { rejectWithValue }) => {
    const fetchCountry = async (
      city: CityType,
    ): Promise<CountriesType | undefined> => {
      try {
        const res = await axios.get(
          'https://nominatim.openstreetmap.org/reverse',
          {
            params: {
              format: 'json',
              lat: city.position.lat,
              lon: city.position.lng,
            },
          },
        )

        return {
          id: v4(),
          country: res.data.address.country,
          countryCode: res.data.address.country_code,
        }
      } catch (err: any) {
        console.log(err.message)
        return undefined
      }
    }

    const processCities = async (
      cities: CityType[],
    ): Promise<(CountriesType | undefined)[]> => {
      const countriesPromises = cities.map(fetchCountry)
      const newCountries = await Promise.all(countriesPromises)
      return newCountries
    }

    try {
      const countries = await processCities(cities)
      return countries
    } catch (err: any) {
      return rejectWithValue(err.message)
    }
  },
)

const worldWiseSlice = createSlice({
  name: 'worldWise',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<(CountriesType | undefined)[]>) => {
      state.countries = [...action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        getCities.fulfilled,
        (state, action: PayloadAction<CityType[]>) => {
          state.cities = action.payload
        },
      )
      .addCase(getCities.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<(CountriesType | undefined)[]>) => {
          state.countries = [ ...action.payload]
        },
      )
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setCountries } = worldWiseSlice.actions

export default worldWiseSlice.reducer
