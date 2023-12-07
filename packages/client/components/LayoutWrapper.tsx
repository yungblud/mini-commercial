'use client'

import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

export const queryClient = new QueryClient({})

export default function LayoutWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ''}
    >
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header />
          <ChildrenWrapper>{children}</ChildrenWrapper>
          <Footer />
          <LoginModal />
        </Container>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  )
}
