import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'

interface MenuItemProps extends ButtonProps {
  children: React.ReactNode
  to: string
}

const MenuItem = ({ children, to, ...buttonProps }: MenuItemProps): React.ReactElement => {
  const buttonColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Link href={to}>
      <Button color={buttonColor} {...buttonProps} data-cy="menu-item">
        {children}
      </Button>
    </Link>
  )
}

export default MenuItem
