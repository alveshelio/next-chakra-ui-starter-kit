import React from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

interface ToggleButtonProps extends IconButtonProps {
  toggle: () => void
  icon: React.ReactElement
}
const ToggleButton = ({ toggle, icon, ...iconProps }: ToggleButtonProps): React.ReactElement => {
  return <IconButton colorScheme="light" size="lg" onClick={toggle} icon={icon} {...iconProps} />
}

export default ToggleButton
