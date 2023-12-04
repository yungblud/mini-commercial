'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
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

const LoginButtonWrapper = styled(Link)`
  margin-left: auto;
`

export default function Header() {
  const { open } = useLoginModalStore()
  return (
    <Container>
      <Link href="/">
        <CompanyLogo>ColdSurf Store</CompanyLogo>
      </Link>
      <LoginButtonWrapper href="/login">
        <Button onClick={open}>Log In</Button>
      </LoginButtonWrapper>
    </Container>
  )
}
