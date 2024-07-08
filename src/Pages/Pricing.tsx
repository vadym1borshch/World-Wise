import { NavBar } from '../Components/NavBar/NavBar'
import { FC } from 'react'
import { Box } from '@mui/material'
//@ts-ignore
import image from '../common/images/img-2.jpg'

export const Pricing: FC = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        position: 'fixed',
        backgroundColor: '#334760',
        color: '#fff',
      }}
    >
      <NavBar />

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}
      >
        <Box
          sx={{
            marginLeft: 1,
            overflow: 'auto',
          }}
        >
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </Box>
        <Box
          sx={{
            marginRight: 1,
            '& img': {
              width: '300px',
            },
          }}
        >
          <img src={image} alt="city" />
        </Box>
      </Box>
    </Box>
  )
}
