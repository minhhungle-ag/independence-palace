import { Box, Stack, Typography, alpha, Button } from '@mui/material'
import { Container } from '@mui/system'
//
const banner = 'https://dinhdoclap.gov.vn/wp-content/uploads/2017/10/IMG_84561-1.jpg'

export function FooterBanner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '50vh',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box sx={{ height: '100%', bgcolor: (theme) => alpha(theme.palette.common.black, 0.3) }}>
        <Container sx={{ height: '100%' }}>
          <Box sx={{ height: '100%' }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              sx={{ py: 6, height: '100%' }}
              spacing={3}
            >
              <Box sx={{ width: { xs: '100%', md: 500 } }}>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color="white"
                  sx={{
                    fontFamily: 'monospace',
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                  }}
                >
                  EXHIBITION FROM NORODOM PALACE TO INDEPENDENCE PALACE 1868 – 1966
                </Typography>
              </Box>

              <Button color="primary" variant="contained">
                See more
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
