'use client'

import { Users } from "@/src/@types/user"
import { FormEvent, useRef, useState } from "react"
import styles from './page.module.scss'

export default function RecoverPage(){
    const [email,setEmail] = useState('')
    const [persistEmail,setPersistEmail] = useState<Users[]>([])
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const refFirstForm = useRef<HTMLFormElement>(null)
    const refSecondForm = useRef<HTMLFormElement>(null)
    
    async function checkAndOpenSecondForm(ev:FormEvent){
        ev.preventDefault()
        const dbUrl = process.env.NEXT_PUBLIC_API_URL
        const getDbUsers = await fetch(`${dbUrl}`)
        const converseDb:Users[]= await getDbUsers.json()
        const checkEmailExists = converseDb.filter(user=>user.email === email)
        
        if(checkEmailExists.length>0){
            if(refFirstForm.current && refSecondForm.current){
                refFirstForm.current.style.display = 'none'
                setPersistEmail(checkEmailExists)
                refSecondForm.current.style.display = 'block'
            }
        }else{
            alert('Email não encontrado no nosso banco de dados.')
        }
    }

    async function changePassword(ev:FormEvent){
        ev.preventDefault()
        if(password!==confirmPassword){
            alert('Senhas não coincidem')
        }else{
            const dbUrl = process.env.NEXT_PUBLIC_API_URL
            const updatePassword = await fetch(`${dbUrl}`,{
                method: "PUT",
                body: JSON.stringify(
                  {email:persistEmail[0].email,
                   password:password
                  }
                ),
                headers:{
                  "Content-Type": "application/json"
                }
            })
            setTimeout(() => {
                alert('Sua senha foi atualizado com sucesso')
                window.location.href = '/auth/'
            }, 1000);
        }
        

    }

    return(
        <>
            <form onSubmit={(ev)=>checkAndOpenSecondForm(ev)} ref={refFirstForm}>
                <label htmlFor="email">Qual é o email cadastrado na plataforma</label>
                <input 
                type="text" 
                value={email}
                onChange={(ev)=>setEmail(ev.currentTarget.value)}
                aria-label="Input de email cadastrado"
                tabIndex={2}
                />
                <button aria-label="Botão para verificar se email é cadastrado na plataforma"
                tabIndex={3}>Verificar</button>
            </form>
            
            <form onSubmit={(ev)=>changePassword(ev)} ref={refSecondForm} className={styles.form}>
            <label htmlFor="password">Nova senha</label>
            <input 
            type="password" 
            value={password}
            onChange={(ev)=>setPassword(ev.currentTarget.value)}
            aria-label="Input de nova senha"
            tabIndex={2}
            />

            <label htmlFor="confirmPassword">Confirmação da senha</label>
            <input 
            type="password" 
            value={confirmPassword}
            onChange={(ev)=>setConfirmPassword(ev.currentTarget.value)}
            aria-label="Input de confirmação de nova senha"
            tabIndex={3}
            />
            <button aria-label="Botão para confirmação de troca de senha"
            tabIndex={4}>Trocar senha</button>
            </form>
        </>
    )
}