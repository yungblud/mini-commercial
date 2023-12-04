'use client'

import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import LoginModal from './LoginModal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ChildrenWrapper = styled.div`
  flex: 1;
`

export default function LayoutWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <Container>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
      <LoginModal />
    </Container>
  )
}
