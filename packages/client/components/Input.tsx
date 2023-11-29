/* eslint-disable no-undef */
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function Input(props: InputProps) {
  return <input {...props} />
}
