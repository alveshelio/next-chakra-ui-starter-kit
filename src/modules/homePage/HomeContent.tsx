import {
  Avatar,
  Badge,
  Box,
  Button,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Layout from 'src/modules/layout/Layout'

const HomeContent = (): React.ReactElement => {
  const { colorMode } = useColorMode()

  return (
    <Layout>
      <VStack my={24} spacing={12}>
        <Heading as="h1" fontSize="6xl" textAlign="center" data-cy="dark">
          A {colorMode === 'light' ? 'Light' : 'Dark'} Theme
        </Heading>

        <Divider />

        <Text>
          Starting a NextJS project can be quite time consuming and tedious. So why waste your
          precious time when you can have pretty much everything you need to start a new{' '}
          <strong>NextJS</strong> project packed in this <strong>Starter Kit</strong>
        </Text>
        <Container centerContent={true} maxW="2xl">
          <Heading as="h2" fontSize="2xl" mb={4}>
            What was packed into this starter kit?
          </Heading>
          <OrderedList>
            <ListItem>
              <Link href="https://www.typescriptlang.org/" isExternal textDecoration="underline">
                TypeScript
              </Link>
            </ListItem>
            <ListItem>
              Linting with{' '}
              <Link href="https://eslint.org/" isExternal textDecoration="underline">
                ESLint
              </Link>
              <Link href="https://prettier.io" isExternal textDecoration="underline">
                Prettier
              </Link>{' '}
            </ListItem>
            <ListItem>
              <Link href="https://chakra-ui.com" isExternal textDecoration="underline">
                Chakra UI
              </Link>
            </ListItem>
            <ListItem>
              Pre-commit with{' '}
              <Link
                href="https://github.com/azz/pretty-quick"
                isExternal
                textDecoration="underline"
              >
                pretty-quick
              </Link>{' '}
              &{' '}
              <Link href="https://typicode.github.io/husky" isExternal textDecoration="underline">
                Husky
              </Link>
            </ListItem>
            <ListItem>
              Unit Testing with{' '}
              <Link href="https://jestjs.io/" isExternal textDecoration="underline">
                Jest
              </Link>{' '}
              &{' '}
              <Link href="https://testing-library.com/" isExternal textDecoration="underline">
                Testing Library
              </Link>
            </ListItem>
            <ListItem>
              E2E Testing with{' '}
              <Link href="https://cypress.io" isExternal textDecoration="underline">
                Cypress
              </Link>
            </ListItem>
            <ListItem>
              CI/CD with{' '}
              <Link
                href="https://github.com/features/actions"
                isExternal
                textDecoration="underline"
              >
                Github Actions
              </Link>
            </ListItem>
          </OrderedList>
        </Container>

        <Divider />

        <Container>
          <Heading as="h3" fontSize="xl" mb={4} textAlign="center">
            Chakra + Next ={' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Heading>
        </Container>

        <Divider />
        <Container>
          <Stack>
            <Heading as="h4" fontSize="lg" my={4} textAlign="center">
              How to get started
            </Heading>
            <Text>
              You can use this <strong>starter kig</strong> in a couple of different ways.
            </Text>
            <Text>
              You can use this starter kit as a template for <strong>NextJs</strong>
            </Text>
            <Text>The dark theme is configured to be the initial color mode.</Text>
            <Text>
              The <em>full arsenal</em> of Chakra UI's features and components is at your disposal
              in this Next.js app and configurable to your wishes.
            </Text>

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
                href="https://github.com/kahlil/dark/blob/main/src/pages/index.tsx"
                isExternal
                textDecoration="underline"
              >
                source code
              </Link>
              .
            </Text>
          </Stack>
        </Container>

        <Divider />

        <Container>
          <Heading as="h3" fontSize="xl" mb={4} textAlign="center">
            Other Tech{' '}
            <span role="img" aria-label="robot-harm">
              🦾
            </span>
          </Heading>
          <Stack>
            <Text>
              Pre-configured with sensible defaults provided by the community or the creators of the
              tools.
            </Text>
          </Stack>
        </Container>
        <Divider />
        <Text textAlign="center">
          Made with{' '}
          <span role="img" aria-label="sparkles">
            ✨
          </span>{' '}
          by{' '}
          <Link href="https://github.com/alveshelio" isExternal textDecoration="underline">
            Helio Halves
          </Link>{' '}
          &bull;{' '}
          <Link
            href="https://github.com/alveshelio/next-chakra-ui-starter-kit"
            isExternal
            textDecoration="underline"
          >
            github/alveshelio/next-chakra-ui-starter-kit
          </Link>{' '}
        </Text>
      </VStack>
    </Layout>
  )
}

export default HomeContent
