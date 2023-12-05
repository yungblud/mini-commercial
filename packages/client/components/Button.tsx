/* eslint-disable no-undef */
import styled from '@emotion/styled'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import palettes from '@/libs/palettes'

export interface ButonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ButtonBase = styled.button`
  border-radius: 14px;
  padding: 0.5rem;
  border: none;
  font-size: 14px;
  background-color: ${palettes.white};
  border: 1px solid ${palettes.borderPrimary};
  cursor: pointer;
`

export default function Button(props: ButonProps) {
  return <ButtonBase {...props} />
}
