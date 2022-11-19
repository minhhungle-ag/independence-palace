import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { i18nTranslation } from './i18n/i18n'

export let theme = createTheme({
  // typography: {
  //   fontSize: 13,
  // },
  // palette: {
  //   primary: {
  //     main: '#f7941d',
  //   },
  //   secondary: {
  //     light: '#EDF7FA',
  //     main: '#00A8CC',
  //   },
  //   text: {
  //     primary: '#21243D',
  //   },
  // },
})

theme = responsiveFontSizes(theme)

const container = document.getElementById('root')!
const root = createRoot(container)
i18nTranslation()

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
