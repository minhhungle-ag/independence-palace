import { ReactNode } from 'react'
import { Box } from '@mui/material'
import { Header } from './Header'
import { Footer } from './Footer'

export interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box>
        <Header />
      </Box>

      <Box>{children}</Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  )
}
