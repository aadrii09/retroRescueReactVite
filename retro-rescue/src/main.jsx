import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import AppRouter from './routes/AppRouter.jsx'
import {AuthProvider} from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <AppRouter />
    </AuthProvider>
  </StrictMode>,
) 
