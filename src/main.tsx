import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './site/App'
import './site/styles.css'
import './site/hero.css'
import './site/buttons.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
)
