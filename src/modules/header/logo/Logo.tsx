import React from 'react'
import { Box, Text, BoxProps, useColorModeValue } from '@chakra-ui/react'

interface LogoProps extends BoxProps {
  children: React.ReactNode
}

const Logo = ({ children, ...boxProps }: LogoProps): React.ReactElement => {
  const logoColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box {...boxProps} mb={4}>
      <Text fontSize="lg" fontWeight="bold" color={logoColor}>
        {children}
      </Text>
    </Box>
  )
}

export default Logo
