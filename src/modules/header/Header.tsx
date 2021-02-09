import { Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from '@modules/header/logo/Logo'
import Links from '@modules/header/navigation/Links'
import MenuItem from '@modules/header/navigation/MenuItem'
import MenuToggle from '@modules/header/navigation/MenuToggle'
import Navigation from '@modules/header/navigation/Navigation'
import ToggleTheme from '@modules/header/ToggleTheme'

const Header = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (): void => {
    setIsOpen((x) => !x)
  }
  return (
    <Grid gridTemplateColumns="1fr 50px" alignItems="start" mt={2}>
      <Navigation>
        <Logo>Company</Logo>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Links isOpen={isOpen}>
          <MenuItem to="/" variant="ghost">
            Home
          </MenuItem>
          <MenuItem to="/ui-examples" variant="ghost">
            Ui Examples
          </MenuItem>
          <MenuItem to="/" variant="ghost">
            Who we are
          </MenuItem>
          <MenuItem to="/" variant="ghost">
            Get in touch
          </MenuItem>
        </Links>
      </Navigation>
      <ToggleTheme />
    </Grid>
  )
}

export default Header
