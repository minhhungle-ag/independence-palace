import { Box, Stack, Typography } from '@mui/material'

export function History() {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mx: -2 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 2 }, order: { xs: 1, md: 0 } }}>
        <Stack spacing={4} sx={{ p: 2 }}>
          {/* <Box sx={{ position: 'relative', height: 0, paddingTop: '56.25%', width: '100%' }}>
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
          </Box> */}

          <Box
            component="img"
            width="100%"
            alt=""
            src="https://dinhdoclap.gov.vn/wp-content/uploads/2017/10/IMG_84561-1.jpg"
            sx={{ borderRadius: 1, verticalAlign: 'middle' }}
          />
        </Stack>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 2 }, order: { xs: 0, md: 1 } }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            From Norodom to Independence Palace
          </Typography>
          <Typography variant="body1" textAlign="justify">
            From Norodom Palace to Independence Palace (1868-1966) is a very interesting thematic
            gallery about old Saigon made in the space of an old house - two-storey French
            architecture in the new Dinh Doc Lap relic. open the client visit.
          </Typography>

          <Typography variant="body1" textAlign="justify">
            The exhibition is full of documents and images of important historical value to clarify
            the historical story of a company that has existed for nearly 100 years, which is a
            symbol of the French population in Cochinchina. It was later renamed to Independence in
            1954, witnessing the fall of Ngo Dinh Diem's government.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
}
