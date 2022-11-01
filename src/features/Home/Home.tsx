import { Box, Container, Divider } from '@mui/material'
import { Banner } from '../../components/Common/Banner'
import { About } from './components/About'
import { History } from './components/History'
import { Information } from './components/Information'
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Box>
      <Banner />

      <Container>
        <Box sx={{ my: { xs: 3, md: 8 } }}>
          <Information />
        </Box>

        <Box sx={{ my: { xs: 3, md: 8 } }}>
          <About />
        </Box>

        <Box sx={{ my: { xs: 3, md: 8 } }}>
          <History />
        </Box>
      </Container>
    </Box>
  )
}
