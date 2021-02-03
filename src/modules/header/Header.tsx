import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import ToggleTheme from 'src/modules/header/ToggleTheme'

interface HeaderProps {
  children: React.ReactNode
}
const Header = ({ children }: HeaderProps): React.ReactElement => (
  <Flex h={50} alignItems="center">
    <Box>{children}</Box>
    <Spacer />
    <ToggleTheme />
  </Flex>
)

export default Header
