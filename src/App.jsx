import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-500.css'
import '@fontsource/roboto/latin-700.css'
import { theme } from './shared/theme.js'
import Landing from './pages/Landing.jsx'

// Las demás pantallas se cargan solo cuando se visitan (mejor rendimiento).
const Login = lazy(() => import('./pages/Login.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const Recover = lazy(() => import('./pages/Recover.jsx'))
const DashboardCliente = lazy(() => import('./pages/dashboard/DashboardCliente.jsx'))
const DashboardAdmin = lazy(() => import('./pages/dashboard/DashboardAdmin.jsx'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/dashboard" element={<Navigate to="/dashboard/cliente" replace />} />
            <Route path="/dashboard/cliente" element={<DashboardCliente />} />
            <Route path="/dashboard/admin" element={<DashboardAdmin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
