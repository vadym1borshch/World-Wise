import { FC } from 'react'
import { Box } from '@mui/material'
import { NavBar } from '../Components/NavBar/NavBar'
//@ts-ignore
import image from '../common/images/img-1.jpg'
import useWindowSize from '../hooks/useWindowSize'

export const ProductPage: FC = () => {
  const {freeHeight, height} = useWindowSize(30)
  return (
    <Box
      sx={{
        backgroundColor: `#334760`,
        height: "100vh",
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        zIndex: -1
      }}
    >
      <NavBar />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: {
            xs: "column", md: "row"
          },
          gap: 3,
          justifyContent: 'center',
          height: freeHeight,
          width: '100%',
          margin: 'auto 0',
          zIndex: 1
        }}
      >
        <Box
          sx={{
            '& img': {
              width: '300px',
              marginLeft: { xs: "0", md: 3 },
            },
          }}
        >
          <img src={image} alt="men with dog" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: "90%", md: '70%' },
            color: '#fff',
            marginRight: { xs: "0", md: 3 },
            marginBottom: "10px",
            overflow: 'auto'
          }}
        >
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
