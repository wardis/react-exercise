import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NavigationContextProvider } from './contexts/navigation.tsx'

/**
 * I've put the NavigationContext here but it can be moved to App.tsx
 * surrounding only the sidenav but it will cost a refactor.
 * We can stick with this for now.
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </React.StrictMode>
)
