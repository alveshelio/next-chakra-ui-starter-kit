import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import ToggleButton from '@modules/common/togglebutton/ToggleButton'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface MenuToggleProps {
  toggle: () => void
  isOpen: boolean
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps): React.ReactElement => {
  const iconColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <ToggleButton
      toggle={toggle}
      aria-label="Toggle Menu"
      display={{ base: 'block', md: 'none' }}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      color={iconColor}
      data-cy="toggle-menu"
    />
  )
}

export default MenuToggle
