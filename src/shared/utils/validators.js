const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateEmail = (value) => {
  if (!value.trim()) return 'Ingresa tu correo electrónico'
  if (!EMAIL_REGEX.test(value)) return 'Ingresa un correo válido'
  return ''
}

export const validateRequired = (value, message = 'Este campo es obligatorio') =>
  value.trim() ? '' : message

export const validateName = (value) => {
  if (!value.trim()) return 'Ingresa tu nombre'
  if (value.trim().length < 3) return 'Debe tener al menos 3 caracteres'
  return ''
}

export const validateNewPassword = (value) => {
  if (!value) return 'Crea una contraseña'
  if (value.length < 8) return 'Debe tener al menos 8 caracteres'
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) return 'Debe incluir letras y números'
  return ''
}

export const validateConfirmPassword = (value, password) => {
  if (!value) return 'Confirma tu contraseña'
  if (value !== password) return 'Las contraseñas no coinciden'
  return ''
}
