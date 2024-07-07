import { FC } from 'react'
import { Box } from '@mui/material'
import { NavBar } from '../Components/NavBar/NavBar'
//@ts-ignore
import image from '../common/images/img-1.jpg'

export const ProductPage: FC = () => {
  return (
    <Box  sx={{
      backgroundImage: `url(${image})`,
      minHeight: '100vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'fixed',

    }}>
      <NavBar />

      <Box>
        <Box>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </Box>
      </Box>
    </Box>
  )
}
