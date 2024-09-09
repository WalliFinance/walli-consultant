'use client'

import { User } from "@/src/@types/user"
import { FormEvent, useState } from "react"

export default function ConfigurationPage(){
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    async function changePassword(ev:FormEvent) {
    ev.preventDefault()
    const dbUrl = process.env.NEXT_PUBLIC_API_URL
    const userLocal = localStorage.getItem('Usuario logado')
    if(password ==='' || confirmPassword==='' ){
        alert('Preencha todos os campos')
    }else if(password!==confirmPassword){
        alert('Senhas não coincidem')
    }else{
        if(userLocal){
            const convertUser: User = JSON.parse(userLocal) 
            const updatePassword = await fetch(`${dbUrl}`,{
                method: "PUT",
                body: JSON.stringify(
                  {email:convertUser.email,
                   password:password
                  }
                ),
                headers:{
                  "Content-Type": "application/json"
                }
            })
            setTimeout(() => {
                alert('Sua senha foi atualizado com sucesso')
                window.location.href = '/dashboard/'
            }, 1000)
           
            } else{
                alert('Você não está logado')
                setTimeout(() => {
                  window.location.href = '/auth/'
                }, 500);   
            }
    }
}

    return(
        <>
            <form onSubmit={(ev)=>changePassword(ev)}>
                <label htmlFor="password">Senha</label>
                <input 
                type="password" 
                id="password"
                name="password"
                value={password}
                onChange={(ev)=>setPassword(ev.currentTarget.value)}
                tabIndex={10}
                aria-label="Input de senha"
                />
                <label htmlFor="confirmPassword">Confirmação de senha</label>
                <input 
                type="password" 
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(ev)=>setConfirmPassword(ev.currentTarget.value)}
                tabIndex={11}
                aria-label="Input de confirmação de senha"
                />

                <button  
                tabIndex={12}
                aria-label="Botão de confirmação de troca de senha">Trocar senha</button>
            </form>
        </>
    )
}