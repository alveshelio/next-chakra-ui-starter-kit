import React from 'react'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react'
import Layout from 'src/modules/layout/Layout'

export default function UIExamplePage(): React.ReactElement {
  return (
    <Layout>
      <Container mt={8}>
        <Stack>
          <Text pb={2}>Oh, look! Chakra UI buttons:</Text>
          <Stack pb={2} spacing={4} direction="row" align="center">
            <Button size="xs">Button</Button>
            <Button colorScheme="teal" size="sm">
              Button
            </Button>
            <Button colorScheme="purple" size="md">
              Button
            </Button>
            <Button colorScheme="pink" size="lg">
              Button
            </Button>
          </Stack>

          <Text py={2}>Woah! A Chakra UI slider:</Text>
          <Slider pb={2} aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          <Text pt={4} pb={2}>
            Blimey! Chakra UI switches:
          </Text>
          <Stack pb={2} align="center" direction="row">
            <Switch size="sm" colorScheme="teal" />
            <Switch size="md" colorScheme="purple" />
            <Switch size="lg" colorScheme="pink" />
          </Stack>

          <Text py={2}>Damn, yo! Composed Chakra UI components for displaying data:</Text>
          <Flex pb={2}>
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box ml="3">
              <Text fontWeight="bold">
                Segun Adebayo
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
              <Text fontSize="sm">UI Engineer, creator of Chakra UI</Text>
            </Box>
          </Flex>

          <Text py={2}>
            See the code for the examples above in the{' '}
            <Link
              href="https://github.com/alveshelio/next-chakra-ui-starter-kit/blob/main/src/pages/index.tsx"
              isExternal
              textDecoration="underline"
            >
              source code
            </Link>
            .
          </Text>
        </Stack>
      </Container>
    </Layout>
  )
}
