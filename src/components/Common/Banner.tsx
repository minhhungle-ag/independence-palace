import { Box, Stack, Typography, alpha } from '@mui/material'
import { Container } from '@mui/system'

const banner = 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/2-8.jpg'

export function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 600,
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '60%',
      }}
    >
      <Box sx={{ height: '100%', bgcolor: (theme) => alpha(theme.palette.common.black, 0.5) }}>
        <Container sx={{ height: '100%' }}>
          <Stack sx={{ height: '100%' }}>
            <Box flexGrow={1} />
            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              flexWrap="wrap"
              sx={{ py: 6 }}
            >
              <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
                <Typography variant="h2" fontWeight={500} color="white">
                  INDEPENDENCE PALACE
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
