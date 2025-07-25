import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { Provider } from 'react-redux'
import { store } from './ci/store'
import { Router } from './router'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <Router />
      </Provider>
  </StrictMode>,
)
