import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Simple from './simple'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Simple />

  </StrictMode>,
)
