import { useState } from 'react'

// Manejo simple de formularios: valores, errores y validación (sin envío real).
export const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev))
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] || '' }))
  }

  const handleSubmit = (onValid) => (event) => {
    event.preventDefault()
    const newErrors = validate(values)
    setErrors(newErrors)
    if (!Object.values(newErrors).some(Boolean)) onValid(values)
  }

  return { values, errors, handleChange, handleBlur, handleSubmit }
}
