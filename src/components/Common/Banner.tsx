import { Box, Stack, Typography, alpha, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import { useTranslation } from 'react-i18next'
import { theme } from '../..'
import banner from '../../images/banner.jpg'

export function Banner() {
  const { t } = useTranslation('translation')

  const sm = useMediaQuery(theme.breakpoints.up('sm'))

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
          <Stack alignItems="center" justifyContent="center" height="100%" width="100%">
            <Typography
              variant={sm ? 'h3' : 'h4'}
              fontWeight={500}
              color="white"
              sx={{
                textAlign: 'center',
                letterSpacing: '.1rem',
                textDecoration: 'none',
              }}
            >
              {t(`subTitle`)}
            </Typography>

            <Typography
              variant={sm ? 'h1' : 'h2'}
              fontWeight={600}
              color="white"
              sx={{
                textAlign: 'center',
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
