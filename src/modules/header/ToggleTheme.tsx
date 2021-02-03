import React from 'react'
import { Flex, Button, useColorMode, Box, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleTheme = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  // Since some chakra-ui components aren't compatible dark mode
  // we need to handle the color
  const iconColor = useColorModeValue('gray.700', 'gray.200' + '00')
  return (
    <Flex justify="flex-end" width="100%">
      <Button variant="ghost" onClick={toggleColorMode} size="sm" mt={8}>
        <Box as={colorMode === 'light' ? FiMoon : FiSun} size="24px" color={iconColor} />
      </Button>
    </Flex>
  )
}

export default ToggleTheme
