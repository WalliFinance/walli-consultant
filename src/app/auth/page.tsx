'use client'
import recoverUserByEmail from "@/src/utils/recoverUsers"
import Link from "next/link"
import { useState } from "react"

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return(
    <>
      <form onSubmit={(ev)=>recoverUserByEmail(ev,email,password)}>
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email"
        id="email"
        onChange={(ev)=>setEmail(ev.currentTarget.value)}
        />
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password"
        id="password"
        onChange={(ev)=>setPassword(ev.currentTarget.value)}
        />

        <div>
          <span><Link href={'auth/register'}>Registrar-se</Link></span>
          <span>Recuperar senha</span>
        </div>

        <button>Login</button>
      </form>
    </>
  )
}