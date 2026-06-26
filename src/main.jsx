import React from 'react'
import ReactDOM from 'react-dom/client'
import { InstUISettingsProvider } from '@instructure/ui'
import { theme as canvasTheme } from '@instructure/canvas-theme'
import App from './App'

// Patch canvas theme to match Canvas LMS default brand colors:
// #0770A3 (primary blue) and #2D3B45 (dark text)
const theme = {
  ...canvasTheme,
  colors: {
    ...canvasTheme.colors,
    contrasts: {
      ...canvasTheme.colors?.contrasts,
      blue4570: '#0770A3',
      grey125125: '#2D3B45',
    },
  },
  'ic-brand-primary': '#0770A3',
  'ic-brand-font-color-dark': '#2D3B45',
  'ic-brand-button--primary-bgd': '#0770A3',
  'ic-brand-button--secondary-bgd': '#2D3B45',
  'ic-global-nav-link-hover': '#2D3B45',
  'ic-brand-global-nav-menu-item__text-color--active': '#0770A3',
  'ic-brand-global-nav-ic-icon-svg-fill--active': '#0770A3',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InstUISettingsProvider theme={theme}>
      <App />
    </InstUISettingsProvider>
  </React.StrictMode>
)
