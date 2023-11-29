'use client'

import { useState } from 'react'
import Input from '@/components/Input'

export default function LoginForm() {
  const [emailText, setEmailText] = useState('')
  return (
    <form>
      <Input value={emailText} onChange={(e) => setEmailText(e.target.value)} />
    </form>
  )
}
