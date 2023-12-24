'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useCallback } from 'react'
import Button from './Button'
import { useLoginModalStore } from './LoginModal'

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
`

const CompanyLogo = styled.h2`
  font-weight: bold;
`

const LoginButtonWrapper = styled(Button)`
  margin-left: auto;
`

export default function Header() {
  const { open } = useLoginModalStore()
  const { data: session } = useSession()
  const isLoggedIn = !!session
  const onClickLogout = useCallback(async () => {
    await signOut()
  }, [])
  return (
    <Container>
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <CompanyLogo>ColdSurf Store</CompanyLogo>
      </Link>
      {isLoggedIn ? (
        <LoginButtonWrapper onClick={onClickLogout}>Log Out</LoginButtonWrapper>
      ) : (
        <LoginButtonWrapper onClick={open}>Log In</LoginButtonWrapper>
      )}
    </Container>
  )
}
