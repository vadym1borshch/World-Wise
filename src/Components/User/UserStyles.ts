import { SxProps } from '@mui/material'

export const userStyles: SxProps = {
  position: 'absolute',
  backgroundColor: 'black',
  height: 60,
  color: 'white',
  right: 0,
  zIndex: 10,
  margin: '20px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 5px',
  borderRadius: '10px',
  cursor: {
    xs: 'pointer',
    md: 'none',
  },
  transition: 'all 0.3s linear',
  "& .close": {
    position: 'absolute',
    left: "-15px",
    top: "-15px",
    backgroundColor: "red",
    borderRadius: '50%',
    minWidth: 0,
    width: 20,
    height: 20
  }
}