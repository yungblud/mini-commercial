'use client'

import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth/types'
import Header from './Header'
import Footer from './Footer'
import LoginModal from './LoginModal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`

const ChildrenWrapper = styled.div`
  flex: 1;
`

export const queryClient = new QueryClient({})

export default async function LayoutWrapper({
  children,
  session,
}: PropsWithChildren<{
  session?: Session | null
}>) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header />
          <ChildrenWrapper>{children}</ChildrenWrapper>
          <Footer />
          <LoginModal />
        </Container>
      </QueryClientProvider>
    </SessionProvider>
  )
}
