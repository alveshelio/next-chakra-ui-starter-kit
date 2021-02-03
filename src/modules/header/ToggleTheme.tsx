import React from 'react'
import { Button, useColorMode, Box, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleTheme = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  // Since some chakra-ui components aren't compatible dark mode
  // we need to handle the color
  const iconColor = useColorModeValue('gray.700', 'gray.200' + '00')
  return (
    <Button variant="ghost" onClick={toggleColorMode} size="sm">
      <Box
        as={colorMode === 'light' ? FiMoon : FiSun}
        size="24px"
        color={iconColor}
        data-cy="theme-toggle"
      />
    </Button>
  )
}

export default ToggleTheme
