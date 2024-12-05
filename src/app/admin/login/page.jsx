'use client'
import { useRouter } from 'next/navigation'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // For testing, just redirect to dashboard
    router.push('/admin/dashboard')
  }

  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <Card title="Admin Login" className="w-full md:w-6">
        <form onSubmit={handleLogin} className="p-fluid">
          <div className="field">
            <label htmlFor="email" className="block mb-2">Email</label>
            <InputText 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full"
            />
          </div>
          <div className="field mt-4">
            <label htmlFor="password" className="block mb-2">Password</label>
            <Password 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              feedback={false} 
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            label="Login" 
            className="mt-4" 
          />
        </form>
      </Card>
    </div>
  )
}