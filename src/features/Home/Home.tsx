import { Box, Container, Divider } from '@mui/material'
import { Banner } from '../../components/Common/Banner'
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Box>
      <Banner />

      <Container>
        <Box>Home</Box>
      </Container>
    </Box>
  )
}
