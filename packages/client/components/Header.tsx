'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import palettes from '@/libs/palettes'

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

const LoginButton = styled.button`
  border-radius: 14px;
  padding: 0.5rem;
  border: none;
  font-size: 14px;
  background-color: ${palettes.white};
  border: 1px solid ${palettes.borderPrimary};
`

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <CompanyLogo>ColdSurf Store</CompanyLogo>
      </Link>
      <LoginButtonWrapper href="/login">
        <LoginButton>Log In</LoginButton>
      </LoginButtonWrapper>
    </Container>
  )
}
