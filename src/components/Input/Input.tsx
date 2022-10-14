import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

enum InputPropSize {
  small = 'small',
  medium = 'medium'
}

interface InputProps {
  label: string,
  id: string,
  size?: InputPropSize,
  width?: number,
  onChange: (e: any) => void,
  onBlur: (e: any) => void,
  value?: string | number,
  error?: boolean,
  errorText?: string,
}

const Input = ({label, id, width=400, size=InputPropSize.small, onChange, onBlur, value, error, errorText} : InputProps) : JSX.Element => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: {xs: 'column', md: 'column'},
      alignContent: 'space-between',
      columnGap: 2,
    }} >
      <Typography sx={{
        fontSize: '1.2rem',
        marginTop: 0.5  
      }}>{label} : </Typography>
      <TextField
        error={error && true}
        helperText={errorText}
        sx={{
          width: width
        }}
          id={id}
        type='text'
        size={size}
        onChange={onChange}
        onBlur={onBlur}
        value={value}

        />
    </Box>
  )
}

export default Input