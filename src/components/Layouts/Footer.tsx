import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button, Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import { LOGO } from '../../constants/common'
const social = [
  {
    link: '',
    icon: <FacebookIcon />,
  },
  {
    link: '',
    icon: <TwitterIcon />,
  },
  {
    link: '',
    icon: <InstagramIcon />,
  },
]

export function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'grey.300' }}>
      <Container>
        <Stack spacing={2}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ pt: 8, mb: 6, mx: -2 }}
          >
            <Box sx={{ p: 2 }}>
              <Box component="img" alt="logo" src={LOGO} />
              <Typography variant="body1" sx={{ py: 1 }}>
                The Independence Palace
              </Typography>
            </Box>

            <Stack spacing={1} sx={{ width: { xs: '100%', md: 'auto' }, p: 2 }}>
              <Typography variant="h5">Contact</Typography>

              <Typography variant="body2">135 Nam Ky Khoi Nghia st., Dist. 1, HCMC</Typography>
              <Typography variant="body2">106 Nguyen Du st., Dist. 1, HCMC</Typography>
              <Typography variant="body2">Phone: 080. 85037 - 080. 85038</Typography>
              <Typography variant="body2">Fax: 080.85008</Typography>
            </Stack>

            <Stack spacing={1} sx={{ width: { xs: '100%', md: 'auto' }, p: 2 }}>
              <Typography variant="h5">Follow us</Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                {social.map((item, idx) => (
                  <IconButton color="inherit" key={idx}>
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>

              <Button
                variant="outlined"
                color="inherit"
                sx={{ width: { xs: 1 / 2, sm: 1 / 3, md: '100%' } }}
              >
                Contact
              </Button>
            </Stack>

            <Stack spacing={1} sx={{ width: { xs: '100%', md: 2 / 5 }, p: 2 }}>
              <Box sx={{ position: 'relative', height: 0, paddingTop: '56.25%', width: '100%' }}>
                <Box
                  boxShadow={3}
                  component="iframe"
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4463817235587!2d106.69323741533417!3d10.777083262127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1667369141081!5m2!1svi!2s"
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
          </Stack>

          <Divider color="white" />

          <Box
            sx={{
              pb: 2,
              textAlign: 'center',
            }}
          >{`${new Date().getFullYear()}. Power by Minh Hung Le`}</Box>
        </Stack>
      </Container>
    </Box>
  )
}
