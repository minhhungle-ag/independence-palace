import { Search } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import { alpha, Box, Button, Stack } from '@mui/material'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { LOGO } from '../../constants/common'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export interface HeaderProps {
  onToggleDrawer?: () => void
}

export function Header({ onToggleDrawer }: HeaderProps) {
  const [isEn, setIsEn] = useState(false)
  const { t, i18n } = useTranslation('menu')

  const pages = [
    { label: t('home'), link: '' },
    { label: t('introduction'), link: '' },
    { label: t('relic'), link: '' },
    { label: t('exhibition'), link: '' },
    { label: t('activities'), link: '' },
    { label: t('services'), link: '' },
  ]

  useEffect(() => {
    isEn ? i18n.changeLanguage('vi') : i18n.changeLanguage('en')
  }, [isEn, i18n])

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.common.black, 0.1),
        backdropFilter: 'blur(20px)',
        boxShadow: 0,
      }}
    >
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
                {item.label}
              </Button>
            ))}

            {/* <Button
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => i18n.changeLanguage('vi')}
              color="inherit"
              sx={{ width: 40, height: 40, minWidth: 0 }}
            >
              vi
            </Button> */}
          </Stack>

          <Button
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setIsEn((x) => !x)}
            color="inherit"
            sx={{ width: 40, height: 40, minWidth: 0 }}
          >
            {isEn ? 'en' : 'vi'}
          </Button>

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
