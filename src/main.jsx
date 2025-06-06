import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
          // highlightColor: 0xFBFBFB,
          // midtoneColor: 0xdb3a34,
          // lowlightColor: 0xC4D9FF,
          // baseColor: 0xC5BAFF,