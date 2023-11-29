import { Metadata } from 'next'
import LoginForm from './components/LoginForm'

export const metadata: Metadata = {
  title: 'Login | ColdSurf Store',
}

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
