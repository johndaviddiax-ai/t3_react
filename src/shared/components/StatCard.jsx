import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { candyTones } from '../theme.js'

export const StatCard = ({ label, value, Icon, tone = 'pink' }) => {
  const { bg, fg } = candyTones[tone]
  return (
    <Paper variant="outlined" sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ bgcolor: bg, color: fg, width: 48, height: 48, borderRadius: 3, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <Icon />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h5" component="p">
          {value}
        </Typography>
      </Box>
    </Paper>
  )
}
export default StatCard
