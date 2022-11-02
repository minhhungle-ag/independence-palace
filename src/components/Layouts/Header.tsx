import { Search } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import { Box, Button, Stack } from '@mui/material'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { LOGO } from '../../constants/common'

const pages = ['Home', 'Introduction', 'Relic', 'Exhibition', 'Activities', 'Services']

export interface HeaderProps {
  onToggleDrawer?: () => void
}

export function Header({ onToggleDrawer }: HeaderProps) {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters sx={{ my: 1 }}>
          <Box flexGrow={1}>
            <Box component="img" alt="logo" src={LOGO} />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
          >
            {pages.map((item, idx) => (
              <Button color="inherit" key={idx}>
                {item}
              </Button>
            ))}
          </Stack>

          <IconButton color="inherit">
            <Search />
          </IconButton>

          <Box sx={{ display: { md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => onToggleDrawer?.()}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
