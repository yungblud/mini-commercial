import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import GlobalStyle from '@/components/GlobalStyle'
import LayoutWrapper from '@/components/LayoutWrapper'
import { MODAL_PORTAL_ID } from '@/libs/constants'
import { auth } from '@/libs/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store | ColdSurf',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await auth()
  return (
    <html lang="en">
      <head>
        <GlobalStyle />
      </head>
      <body className={inter.className}>
        <LayoutWrapper session={session}>{children}</LayoutWrapper>
        <div id={MODAL_PORTAL_ID}></div>
      </body>
    </html>
  )
}
