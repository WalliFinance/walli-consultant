'use client'
import recoverUserByEmail from "@/src/utils/recoverUsers"
import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { UserLogin } from "@/src/@types/user"

export default function Login(){
  const createLoginForm = z.object( {
    email: z.string()
    .min(1,"O email é obrigatório"),
    password:z.string()
    .min(1,"A senha é obrigatória")
  })

  const{register,handleSubmit, formState:{errors}}= useForm<UserLogin>({resolver:zodResolver(createLoginForm)})

  const onSubmit = (dataForm:UserLogin)=>{
    recoverUserByEmail(dataForm.email,dataForm.password)
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        {errors.email && <p>{errors.email.message}</p>}
        <input 
        type="text" 
        {...register("email")}
        tabIndex={2}
        aria-label="Input de email"
        />
        <label htmlFor="password">Senha</label>
        {errors.password && <p>{errors.password.message}</p>}
        <input 
        type="password" 
       {...register("password")}
        tabIndex={3}
        aria-label="Input de email"
        />

        <div>
          <span tabIndex={4} aria-label="Link para a pagina de registro na plataforma"><Link href={'auth/register'}>Registrar-se</Link></span>
          <span tabIndex={5} aria-label="Link para a pagina de recuperação de senha"><Link href={'auth/recover'}>Recuperar senha</Link></span>
        </div>

        <button tabIndex={6} aria-label="Botão de login">Login</button>
      </form>
    </>
  )
}