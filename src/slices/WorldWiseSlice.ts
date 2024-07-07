import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { v4 } from 'uuid'

export type StatusType = 'succeeded' | 'loading' | 'failed' | 'idle'
/*type ResType = {
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
}*/
export type ErrorType = {
  type?: 'login' | 'register'
  message?: string
}

export type UserType = {
  id: string
  name: string
  email: string
  password: string
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
export type CountryType = {
  id: string
  name: string
  countryCode: string
}

type StateType = {
  cities: CityType[]
  countries: CountryType[]
  status: StatusType
  error: ErrorType | undefined
  currentUser: UserType | null
}

const GET_CITIES_URL = `http://localhost:9000/cities`
const GET_USERS_URL = `http://localhost:9000/users`

export const getCities = createAsyncThunk('world_wise/getCities', async () => {
  const res = await axios.get(GET_CITIES_URL)
  return res.data
})
export const getUsers = createAsyncThunk(
  'world_wise/getUser',
  async (userData: { name: string; email: string; password: string }) => {
    const res = await axios.get(GET_USERS_URL)
    return { users: res.data, userData }
  },
)
export const addCity = async (city: CityType) => {
  try {
    const response = await axios.post(GET_CITIES_URL, city)
    console.log('city added', response.data)
  } catch (error) {
    console.error("Error - city don't added", error)
  }
}
export const addNewUser = async (user: UserType) => {
  try {
    const response = await axios.post(GET_USERS_URL, user)
    console.log('user added', response.data)
  } catch (error) {
    console.error("Error - user don't added", error)
  }
}

export const deleteCity = async (id: any) => {
  try {
    const response = await axios.delete(`${GET_CITIES_URL}/${id}`)
    console.log('city deleted', response.data)
  } catch (error) {
    console.error("Error - city don't delete", error)
  }
}
export const deleteUser = async (id: any) => {
  try {
    const response = await axios.delete(`${GET_USERS_URL}/${id}`)
    console.log('user deleted', response.data)
  } catch (error) {
    console.error("Error - user don't delete", error)
  }
}

const initialState: StateType = {
  cities: [],
  countries: [],
  status: 'idle',
  error: undefined,
  currentUser: null,
}

const worldWiseSlice = createSlice({
  name: 'worldWise',
  initialState,
  reducers: {
    addCityAction: (state, action: PayloadAction<CityType>) => {
      state.cities = [...state.cities, action.payload]
    },
    deleteCityAction: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload)
    },
    setErrorAction: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload
    },
    resetErrorAction: (state) => {
      state.error = undefined
    },
    loginAction: (
      state,
      action: PayloadAction<{ name: string; email: string; password: string }>,
    ) => {},
    createAccountAction: (state, action: PayloadAction<UserType>) => {},
    logoutAction: (state) => {
      state.currentUser = null
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
        state.error = { message: action.error.message }
      })
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        getUsers.fulfilled,
        (
          state,
          action: PayloadAction<{ users: UserType[]; userData: any }>,
        ) => {
          console.log(action.payload)
          const user = action.payload.users.find(
            (u) =>
              u.name.toLowerCase() ===
              action.payload.userData.name.toLowerCase(),
          )
          if (user) {
            if (
              user.password !== action.payload.userData.password ||
              user.email !== action.payload.userData.email
            ) {
              state.error = { type: 'login', message: 'wrong pass or email' }
              return
            }
            state.currentUser = user
            return
          } else {
            state.error = {
              type: 'register',
              message:
                "'User not found. Please register a new account. Would you like to do it now?'",
            }
          }
        },
      )
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = { message: action.error.message }
      })
  },
})

export const {
  addCityAction,
  setErrorAction,
  resetErrorAction,
  deleteCityAction,
  logoutAction
} = worldWiseSlice.actions

export default worldWiseSlice.reducer
