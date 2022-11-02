import { Box, Container } from '@mui/material'
import { Banner } from '../../components/Common/Banner'
import { FooterBanner } from '../../components/Common/FooterBanner'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { History } from './components/History'
import { Information } from './components/Information'
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Box>
      <Banner />

      <Container>
        <Box sx={{ my: { xs: 4, md: 8 } }}>
          <Information />
        </Box>

        <Box sx={{ my: { xs: 4, md: 8 } }}>
          <About />
        </Box>

        <Box sx={{ my: { xs: 4, md: 8 } }}>
          <History />
        </Box>

        <Box sx={{ my: { xs: 4, md: 8 } }}>
          <Gallery />
        </Box>
      </Container>

      <Box>
        <FooterBanner />
      </Box>
    </Box>
  )
}
