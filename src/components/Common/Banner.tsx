import { Box, Stack, Typography, alpha } from '@mui/material'
import { Container } from '@mui/system'
import { useTranslation } from 'react-i18next'
import banner from '../../images/banner.jpg'

export function Banner() {
  const { t } = useTranslation('translation')
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box sx={{ height: '100%', bgcolor: (theme) => alpha(theme.palette.common.black, 0.5) }}>
        <Container sx={{ height: '100%' }}>
          <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
            <Typography
              variant="h2"
              fontWeight={500}
              color="white"
              sx={{
                // fontFamily: 'monospace',
                letterSpacing: '.1rem',
                textDecoration: 'none',
              }}
            >
              {t(`subTitle`)}
            </Typography>

            <Typography
              variant="h1"
              fontWeight={600}
              color="white"
              sx={{
                // fontFamily: 'monospace',
                letterSpacing: '.1rem',
                textDecoration: 'none',
              }}
            >
              {t(`mainTitle`)}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
