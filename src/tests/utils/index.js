import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { DataProvider } from 'contexts/data'
import { Router, BrowserRouter } from 'react-router-dom'

import themes from 'themes'

export const renderWithTheme = children =>
  render(<ThemeProvider theme={themes()}>{children}</ThemeProvider>)

export const renderWithThemeAndContext = ({ component, value }) =>
  render(
    <ThemeProvider theme={themes()}>
      <DataProvider overwrite={value}>{component}</DataProvider>
    </ThemeProvider>
  )

export const renderWithProviders = ({ component, theme, value, history }) => {
  const RouterProvider = history ? Router : BrowserRouter
  return render(
    <DataProvider overwrite={value}>
      <RouterProvider basename="/" history={history}>
        <ThemeProvider theme={themes(theme)}>{component}</ThemeProvider>
      </RouterProvider>
    </DataProvider>
  )
}
