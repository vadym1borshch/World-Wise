import { ChangeEvent, FC, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { LayoutContext } from '../../context/AppLayoutContext'
import { formStyles } from './FormStyles'
import dayjs, { Dayjs } from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { addCity, addCityAction } from '../../slices/WorldWiseSlice'
import { BackButton } from '../BackButton/BackButton'
import { citiesSelector } from '../../slices/selectors'

export const Form: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs())
  const [note, setNote] = useState('')

  const cities = useSelector(citiesSelector)
  const cityContext = useContext(LayoutContext)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const city = cityContext?.city
  const date = selectedDate?.format('DD.MM.YYYY')

  const onNoteChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setNote(e.currentTarget.value)
  }

  const addCityHandler = () => {
    if (city) {
      const added = cities.find((c) => {
        return c.cityName === city?.cityName
      })
      if (!added) {
        dispatch(
          addCityAction({ ...city, date: date ? date : '', notes: note }),
        )
        addCity({ ...city, date: date ? date : '', notes: note })
        navigate('/app/cities')
      }
      return
    }
  }
  return (
    <Box sx={formStyles}>
      <Box className="inputs-container">
        <TextField label={city?.cityName} disabled />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select date"
            value={selectedDate}
            onChange={(date: Dayjs | null) => setSelectedDate(date)}
          />
        </LocalizationProvider>

        <TextField label="Note" value={note} onChange={onNoteChangeHandler} />
      </Box>
      <Box className="buttons-container">
        <Button onClick={addCityHandler}>add</Button>
        <BackButton>Back</BackButton>
      </Box>
    </Box>
  )
}
