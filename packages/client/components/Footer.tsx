'use client'

import styled from '@emotion/styled'
import palettes from '@/libs/palettes'

const Container = styled.div`
  width: 100%;
  height: 15rem;
  background-color: ${palettes.white};
  padding: 1rem;
  border-top: 1px solid ${palettes.borderPrimary};
`

export default function Footer() {
  return (
    <Container>
      <div>Company</div>
    </Container>
  )
}
