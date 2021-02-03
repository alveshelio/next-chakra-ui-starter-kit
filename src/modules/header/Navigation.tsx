import React from 'react'
import Link from 'next/link'
import { Button, Stack } from '@chakra-ui/react'

const Navigation = (): React.ReactElement => (
  <Stack spacing={6} direction="row">
    <Link href="/">
      <Button colorScheme="teal" variant="ghost">
        Menu 1
      </Button>
    </Link>
    <Link href="/">
      <Button colorScheme="teal" variant="ghost">
        Menu 2
      </Button>
    </Link>
    <Link href="/">
      <Button colorScheme="teal" variant="ghost">
        Menu 3
      </Button>
    </Link>
  </Stack>
)

export default Navigation
