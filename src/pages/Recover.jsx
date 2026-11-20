import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import AuthLayout from '../shared/components/AuthLayout.jsx'
import { useForm } from '../shared/hooks/useForm.js'
import { validateEmail } from '../shared/utils/validators.js'

const validate = (v) => ({ email: validateEmail(v.email) })

export const Recover = () => {
  const [sent, setSent] = useState(false)
  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm({ email: '' }, validate)

  // Esqueleto: aquí iría el envío real del correo.
  const onValid = () => setSent(true)

  return (
    <AuthLayout
      title="Recuperar contraseña"
      subtitle="Escribe tu correo y te enviaremos un enlace para restablecerla."
      footer={
        <Link component={RouterLink} to="/login" variant="body2" underline="always">
          Volver a iniciar sesión
        </Link>
      }
    >
      <Box component="form" noValidate onSubmit={handleSubmit(onValid)} sx={{ display: 'grid', gap: 2 }}>
        {sent && <Alert severity="success">Si el correo existe, recibirás un enlace en unos minutos.</Alert>}
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
        <Button type="submit" variant="contained" size="large" fullWidth>
          Enviar enlace
        </Button>
      </Box>
    </AuthLayout>
  )
}
export default Recover
