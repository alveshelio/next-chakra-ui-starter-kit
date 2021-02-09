import {
  Code,
  Container,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Layout from '@modules/layout/Layout'

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
              </Link>{' '}
              &{' '}
              <Link href="https://prettier.io" isExternal textDecoration="underline">
                Prettier
              </Link>{' '}
            </ListItem>
            <ListItem>
              Code Analysis with{' '}
              <Link
                href="https://github.com/github/super-linter"
                isExternal
                textDecoration="underline"
              >
                Github super-linter
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
            <ListItem>
              Ui Library{' '}
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
          </OrderedList>
        </Container>

        <Divider />

        <Container>
          <Heading as="h3" fontSize="xl" mb={4} textAlign="center">
            How to remove code linting with Github super-linter?
          </Heading>
          <Text>
            If you don't wish to analyse your code with super-linter you can simply remove file{' '}
            <Code>.github/workflows/linter.yml</Code>
          </Text>
          <Heading as="h3" fontSize="xl" my={4} textAlign="center">
            You're not using NextJS as a Static Site Generator (SSG)
          </Heading>
          <Text>
            First you need to change the script <Code>build</Code> in <Code>package.json</Code> to{' '}
            <Code>"build": "next build"</Code>. <br />
            Then you need to remove file remove file <Code>.github/workflows/deploy.yml</Code>
          </Text>
          <Heading as="h3" fontSize="xl" my={4} textAlign="center">
            I'm deploying my site to another provider other than <strong>Vercel</strong>
          </Heading>
          <Text>
            In that case you need to updated file <Code>.github/workflows/deploy.yml</Code> to suite
            your platform needs.
          </Text>
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
              You can use this <strong>starter kit</strong> in a couple of different ways.
            </Text>
            <Text>
              You can use this starter kit as an example for <strong>NextJs</strong>
              <br />
              <Code>
                yarn create next-app my-app --example
                https://github.com/alveshelio/next-chakra-ui-starter-kit
              </Code>
            </Text>
            <Text>
              You can generate a new Repo from this one with
              <br />
              <Link
                href="https://github.com/alveshelio/next-chakra-ui-starter-kit/generate"
                isExternal={true}
                textDecoration="underline"
              >
                github.com/alveshelio/next-chakra-ui-starter-kit
              </Link>
            </Text>
            <Text>
              Or you can clone this repo
              <br />
              <Code>git clone https://github.com/alveshelio/next-chakra-ui-starter-kit my-app</Code>
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
