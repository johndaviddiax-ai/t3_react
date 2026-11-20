import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AuthLayout from '../shared/components/AuthLayout.jsx'
import PasswordField from '../shared/components/PasswordField.jsx'
import { useForm } from '../shared/hooks/useForm.js'
import { validateEmail, validateRequired } from '../shared/utils/validators.js'

const validate = (v) => ({
  email: validateEmail(v.email),
  password: validateRequired(v.password, 'Ingresa tu contraseña'),
})

export const Login = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    { email: '', password: '', remember: false },
    validate,
  )

  // Esqueleto: aquí iría la llamada al backend.
  const onValid = () => {}

  return (
    <AuthLayout
      title="Iniciar sesión"
      subtitle="Bienvenido de nuevo, te extrañábamos."
      footer={
        <>
          <Typography variant="body2">
            ¿No tienes cuenta?{' '}
            <Link component={RouterLink} to="/register" underline="always">
              Regístrate
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Demo del panel:{' '}
            <Link component={RouterLink} to="/dashboard/cliente" underline="always">
              Cliente
            </Link>
            {' · '}
            <Link component={RouterLink} to="/dashboard/admin" underline="always">
              Administrador
            </Link>
          </Typography>
        </>
      }
    >
      <Box component="form" noValidate onSubmit={handleSubmit(onValid)} sx={{ display: 'grid', gap: 2 }}>
        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          required
        />
        <PasswordField
          label="Contraseña"
          name="password"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <FormControlLabel
            control={<Checkbox name="remember" checked={values.remember} onChange={handleChange} />}
            label="Recordarme"
          />
          <Link component={RouterLink} to="/recover" variant="body2" underline="always">
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Entrar
        </Button>
      </Box>
    </AuthLayout>
  )
}
export default Login
