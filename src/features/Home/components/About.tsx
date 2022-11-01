import { Box, Stack, Typography } from '@mui/material'

const infoList = [
  'Research and Explanation Deparment',
  'Planning and Finance Department',
  'Security Department',
  'Administrative and Personel Department',
  'Management Asset Department',
  '108 Nguyen Du Guest House, District 1, Ho Chi Minh City',
  '17 Thuy Van – Vung Tau Guest House, Vung Tau City, Ba Ria – Vung Tau province',
]

export function About() {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mx: -1 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={2} sx={{ p: 1 }}>
          <Typography variant="h3" fontWeight="bold">
            About
          </Typography>

          <Typography variant="h6">The Reunification Hall is comprised of 8 units:</Typography>

          {infoList.map((item, idx) => (
            <Typography variant="body1" key={idx}>
              - {item}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={4} sx={{ p: 1 }}>
          <Box
            component="img"
            width="100%"
            alt=""
            src="https://independencepalace.gov.vn/wp-content/uploads/2018/03/2.png"
            sx={{ borderRadius: 1, verticalAlign: 'middle' }}
          />

          <Typography variant="body1" textAlign="justify">
            For many years, the administration and staff of Reunification Hall have stood together
            with a united sense of purpose in fully conducting our mission, the conservation and
            promotion of the Independence Palace as an important historical site. Because of our
            ceaseless efforts, in 2010, the Reunification Hall received the great honor of the
            Government’s Flag of Emulation was also bestowed by the President of the SRV Vietnam’s
            Labor Medal First Class.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
}
