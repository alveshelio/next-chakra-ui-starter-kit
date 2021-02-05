import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from 'src/modules/header/Header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Container maxW="2xl">
    <Header />
    {children}
  </Container>
)

export default Layout
