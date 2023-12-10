'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useCallback } from 'react'
import palettes from '@/libs/palettes'
import Button from './Button'
import { useLoginModalStore } from './LoginModal'

const Container = styled.div`
  width: 100%;
  background-color: ${palettes.white};
  border-bottom: 1px solid ${palettes.borderPrimary};
  padding: 1rem;
  display: flex;
  align-items: center;
`

const CompanyLogo = styled.h3`
  font-weight: bold;
  font-size: 18px;
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
      <Link href="/">
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
