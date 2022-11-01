import { Box, Stack, Typography } from '@mui/material'

export function History() {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mx: -1 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={2} sx={{ p: 1 }}>
          <Typography variant="h3" fontWeight="bold">
            From Norodom to Independence Palace
          </Typography>
          <Typography variant="body1">
            From Norodom Palace to Independence Palace (1868-1966) is a very interesting thematic
            gallery about old Saigon made in the space of an old house - two-storey French
            architecture in the new Dinh Doc Lap relic. open the client visit.
          </Typography>

          <Typography variant="body1">
            The exhibition is full of documents and images of important historical value to clarify
            the historical story of a company that has existed for nearly 100 years, which is a
            symbol of the French population in Cochinchina. It was later renamed to Independence in
            1954, witnessing the fall of Ngo Dinh Diem's government.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={4} sx={{ p: 1 }}>
          <Box sx={{ position: 'relative', height: 0, paddingTop: '56.25%', width: '100%' }}>
            <Box
              component="iframe"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ibnp85wZ3lc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 1,
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
