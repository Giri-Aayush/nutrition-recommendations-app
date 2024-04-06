import { Typography } from '@mui/material'

const Logo = () => {
  return (
    <Typography
      sx={{
        textShadow: theme => '3px 6px 10px ' + theme.palette.primary.main + 'a8',
      }}
      color="primary"
      variant="h5"
      fontWeight={500}
      letterSpacing={0.7}>
      Nutrition.Ai
    </Typography>
  )
}

export default Logo
