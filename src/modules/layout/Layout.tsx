import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from 'src/modules/header/Header'
import Navigation from 'src/modules/header/Navigation'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Container>
    <Header>
      <Navigation />
    </Header>
    {children}
  </Container>
)

export default Layout
