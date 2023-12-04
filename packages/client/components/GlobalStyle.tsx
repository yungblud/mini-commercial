'use client'

import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import palettes from '@/libs/palettes'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          background-color: ${palettes.background1};
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
  )
}
