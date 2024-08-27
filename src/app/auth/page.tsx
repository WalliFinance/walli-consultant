'use client'
import Link from "next/link"



export default function Login(){
  return(
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email"
        id="email"
        />
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password"
        id="password"
        />

        <div>
          <span><Link href={'/register'}>Registrar-se</Link></span>
          <span>Recuperar senha</span>
        </div>

        <button>Login</button>
      </form>
    </>
  )
}