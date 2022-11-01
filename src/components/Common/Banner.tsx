import { Box, Stack, Typography, alpha } from '@mui/material'
import { Container } from '@mui/system'

const banner =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Palacio_de_la_Reunificaci%C3%B3n%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_03.JPG/5503px-Mapcarta.jpg'

export function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 750,
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ height: '100%', bgcolor: (theme) => alpha(theme.palette.common.black, 0.3) }}>
        <Container sx={{ height: '100%' }}>
          <Stack sx={{ height: '100%' }}>
            <Box flexGrow={1} />
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="space-between"
              flexWrap="wrap"
              sx={{ py: 6 }}
            >
              <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
                <Typography
                  variant="h2"
                  fontWeight={500}
                  color="white"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',

                    textDecoration: 'none',
                  }}
                >
                  The Independence Palace
                </Typography>
              </Box>

              <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
                <Typography variant="h5" color="white">
                  Ticket sales hours
                </Typography>

                <Typography variant="h6" color="white">
                  08: 00 AM - 03:00 PM
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
