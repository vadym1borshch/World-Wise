import React, { FC, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { Login } from './Pages/Login'
import { ProductPage } from './Pages/ProductPage'
import { AppLayout } from './Pages/AppLayout'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store/store'
import { getCities, getUsers } from './slices/WorldWiseSlice'
import { Cities } from './Components/Cities/Cities'
import { Form } from './Components/Form/Form'
import { Countries } from './Components/Countries/Countries'
import { AppLayoutContext } from './context/AppLayoutContext'
import { CityInfo } from './Components/CityInfo/CityInfo'

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

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
          <Route path="cityinfo" element={<CityInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
