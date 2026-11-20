import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AuthLayout from '../shared/components/AuthLayout.jsx'
import PasswordField from '../shared/components/PasswordField.jsx'
import { useForm } from '../shared/hooks/useForm.js'
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validateNewPassword,
} from '../shared/utils/validators.js'

const validate = (v) => ({
  name: validateName(v.name),
  email: validateEmail(v.email),
  password: validateNewPassword(v.password),
  confirm: validateConfirmPassword(v.confirm, v.password),
  terms: v.terms ? '' : 'Debes aceptar los términos',
})

export const Register = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    { name: '', email: '', password: '', confirm: '', terms: false },
    validate,
  )

  // Esqueleto: aquí iría la llamada al backend.
  const onValid = () => {}

  return (
    <AuthLayout
      title="Crea tu cuenta"
      subtitle="Regístrate para hacer pedidos y ganar puntos dulces."
      footer={
        <Typography variant="body2">
          ¿Ya tienes cuenta?{' '}
          <Link component={RouterLink} to="/login" underline="always">
            Inicia sesión
          </Link>
        </Typography>
      }
    >
      <Box component="form" noValidate onSubmit={handleSubmit(onValid)} sx={{ display: 'grid', gap: 2 }}>
        <TextField
          label="Nombre completo"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.name)}
          helperText={errors.name}
          fullWidth
          required
        />
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
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          helperText="Mínimo 8 caracteres, con letras y números"
          required
        />
        <PasswordField
          label="Confirmar contraseña"
          name="confirm"
          autoComplete="new-password"
          value={values.confirm}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirm}
          required
        />
        <FormControl error={Boolean(errors.terms)}>
          <FormControlLabel
            control={<Checkbox name="terms" checked={values.terms} onChange={handleChange} />}
            label="Acepto los términos y condiciones"
          />
          {errors.terms && <FormHelperText>{errors.terms}</FormHelperText>}
        </FormControl>
        <Button type="submit" variant="contained" size="large" fullWidth>
          Crear cuenta
        </Button>
      </Box>
    </AuthLayout>
  )
}
export default Register
