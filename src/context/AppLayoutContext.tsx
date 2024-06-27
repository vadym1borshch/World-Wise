import React, { createContext, FC, useState } from 'react'

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
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LayoutContext = createContext<LayoutContext | null>(null)

export const AppLayoutContext: FC<IAppLayoutContextProps> = ({ children }) => {
  const [coordinates, setCoordinates] = useState<CoordsType | null>(null)
  console.log(coordinates)

  return (
    <LayoutContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </LayoutContext.Provider>
  )
}
