import React from 'react'
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import Element from './Components/Element';

export default function App() {
  const font = "'Cutive Mono', monospace"
  const fontTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: font,
    },
  })

  return (
    <ThemeProvider theme={fontTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{
        display: { xs: 'block', sm: 'none' },
        height: '100vh',
        border: 1,
        p: '64px', pb: '128px'
      }}>
        <Element />
      </Box>
    </ThemeProvider>
  )
}