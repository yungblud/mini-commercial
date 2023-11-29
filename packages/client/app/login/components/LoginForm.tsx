'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '@/components/Input'

interface Inputs {
  email: string
  password: string
}

export default function LoginForm() {
  const { handleSubmit, register, watch } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  console.log(watch('email'))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} />
      <Input {...register('password')} />
    </form>
  )
}
