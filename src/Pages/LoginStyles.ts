import { SxProps } from '@mui/material'

export const loginStyles:SxProps = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  "& .error": {
    color: "#f44336",
    fontSize: '12px',
    width: "200px",
    textAlign: "center"
  }
}

export const inputsFieldsStyles:SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  width: '320px',
  backgroundColor: '#7088a4',
  borderRadius: '10px',
  gap: 1,
}

export const loginContainerStyles:SxProps = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  margin: 'auto 0',
  backgroundColor: '#334760',
}