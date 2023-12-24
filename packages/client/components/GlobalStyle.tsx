'use client'

import { Global, css } from '@emotion/react'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        body {
          background-color: white;
          color: black;
        }

        @media (prefers-color-scheme: dark) {
          body {
            background-color: rgb(24, 24, 31);
            color: rgb(238, 238, 238);
          }
        }

        a {
          color: #2563eb;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          font-weight: 800;
        }
      `}
    />
  )
}
