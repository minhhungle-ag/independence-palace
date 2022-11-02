import { Box, Stack, Typography } from '@mui/material'

export function Information() {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mx: -2 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            Reunification Hall
          </Typography>

          <Typography variant="body1" textAlign="justify">
            On June 25, 1976, the Independence Palace was recognized as a National Cultural and
            Historical Relic (77A/VHQD Decision). It was then designated a National Special Relic on
            August 12, 2009 by Vietnam’s Prime Minister (1272/QD-TTg Decision). The Independence
            Palace is among Vietnam’s first ten special national relics.
          </Typography>

          <Typography variant="body1" textAlign="justify">
            Reunification Hall is the management agency for the Independence Palace. Pursuant to
            Decision 709/QĐ-VPCP dated June 14, 2013 by the Minister, Chairman of the Government
            Office, Reunification Hall is a state-run business unit tasked with Palace management
            and preservation; as well as serving delegations attending government, Party, and State
            meetings, conferences, and other functions.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Box sx={{ p: 2 }}>
          <Box
            component="img"
            width="100%"
            alt=""
            src="https://independencepalace.gov.vn/wp-content/uploads/2017/06/gt-dinh-doc-lap-01-1.jpg"
            sx={{ borderRadius: 1, verticalAlign: 'middle' }}
          />
        </Box>
      </Box>
    </Stack>
  )
}
