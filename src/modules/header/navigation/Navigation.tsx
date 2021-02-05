import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

interface NavigationProps extends FlexProps {
  children: React.ReactNode
}

const Navigation = ({ children, ...flexProps }: NavigationProps): React.ReactElement => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      alignItems="flex-start"
      wrap="wrap"
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      {...flexProps}
    >
      {children}
    </Flex>
  )
}

export default Navigation
