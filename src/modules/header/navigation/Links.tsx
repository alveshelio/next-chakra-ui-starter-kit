import { Box, Stack } from '@chakra-ui/react'
import React from 'react'

interface LinksProps {
  isOpen: boolean
  children: React.ReactNode
}
const Links = ({ isOpen, children }: LinksProps): React.ReactElement => (
  <Box
    display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    flexBasis={{ base: '100%', md: 'auto' }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={['center', 'space-between', 'flex-end', 'flex-end']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
      data-cy="links"
    >
      {children}
    </Stack>
  </Box>
)

export default Links
