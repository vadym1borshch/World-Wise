import React, { FC, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { Login } from './Pages/Login'
import { ProductPage } from './Pages/ProductPage'
import { AppLayout } from './Pages/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from './store/store'
import { fetchCountries, getCities } from './slices/WorldWiseSlice'
import { Cities } from './Components/Cities/Cities'
import { Form } from './Components/Form/Form'
import { Countries } from './Components/Countries/Countries'
import { AppLayoutContext } from './context/AppLayoutContext'
import { citiesSelector } from './slices/selectors'

export const App: FC = () => {
  const cities = useSelector(citiesSelector)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountries(cities))
  }, [cities, dispatch])

  useEffect(() => {
    dispatch(getCities())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<ProductPage />} />
        <Route
          path="app"
          element={
            <AppLayoutContext>
              <AppLayout />
            </AppLayoutContext>
          }
        >
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="form" element={<Form />} />
          <Route path="cities" element={<Cities />} />
          <Route path="countries" element={<Countries />} />
          <Route path="cityinfo" element={<>city info</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
