import Chip from '@mui/material/Chip'

const styles = {
  Entregado: { bgcolor: '#DDF4E8', color: '#14532D' },
  'En camino': { bgcolor: '#E3F0FF', color: '#0D3B80' },
  Preparando: { bgcolor: '#FFEFD5', color: '#6B3F00' },
  Cancelado: { bgcolor: '#FDE7E7', color: '#8B1A1A' },
}

export const StatusChip = ({ status }) => (
  <Chip label={status} size="small" sx={{ fontWeight: 500, ...styles[status] }} />
)
export default StatusChip
