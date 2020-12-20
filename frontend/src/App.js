import React, { Suspense, useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import { setUser } from './reducers/userReducer'
import { setLanguage } from './reducers/languageReducer'
import { setTheme } from './reducers/themeReducer'

import provideTheme from './utils/themeService'

// Components
import CssBaseline from '@material-ui/core/CssBaseline'

import BeatLoader from './components/BeatLoader/BeatLoader'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

// Views
const MainView = lazy(() => import('./views/MainView/MainView'))
const SettingsView = lazy(() => import('./views/SettingsView/SettingsView'))

var hist = createBrowserHistory()

const App = () => {
  const d = useDispatch()

  // Fetch theme
  const theme = useSelector(store => {
    const storeTheme = store.theme ?? { name: 'dark' }
    return provideTheme(storeTheme.name)
  })

  // Setup user, language and theme
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      d(setUser(JSON.parse(loggedUserJSON)))
    }

    const lang = window.localStorage.getItem('selectedLanguage')
    if (lang) {
      d(setLanguage(JSON.parse(lang)))
    }

    const localtheme = window.localStorage.getItem('selectedTheme')
    if (localtheme) {
      d(setTheme(JSON.parse(localtheme)))
    }
  }, [d])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Suspense fallback={<BeatLoader />} >
          <Router history={hist}>
            <Switch>
              <Route path='/settings' component={SettingsView} />
              <Route path='/' component={MainView} />
            </Switch>
          </Router>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
