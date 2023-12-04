'use client'

import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          background-color: #f5f5f7;
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
