'use client'

import createUser from "@/src/utils/createUser"
import { useState } from "react"

export default function Register(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [birthday,setBirtday] = useState(new Date())

  return(
    <>
      <form onSubmit={(ev)=>createUser(ev,name,email,phone,password,confirmPassword,birthday)}>
        <label htmlFor="name">Nome</label>
        <input 
        type="text" 
        name="name"
        id="name"
        onChange={(ev)=>setName(ev.currentTarget.value)}
        />
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email"
        id="email"
        onChange={(ev)=>setEmail(ev.currentTarget.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input 
        type="text" 
        name="phone"
        id="phone"
        onChange={(ev)=>setPhone(ev.currentTarget.value)}
        />
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password"
        id="password"
        onChange={(ev)=>setPassword(ev.currentTarget.value)}
        />
        <label htmlFor="confirmPassword">Confirmação de senha</label>
        <input 
        type="password" 
        name="confirmPassword"
        id="confirmPassword"
        onChange={(ev)=>setConfirmPassword(ev.currentTarget.value)}
        />
        <label htmlFor="birthday">Data de nascimento</label>
        <input 
        type="date" 
        name="birthday"
        id="birthday"
        onChange={(ev)=>setBirtday(new Date(ev.currentTarget.value))}
        />
        <button>Registrar</button>
      </form>
    </>
  )
}