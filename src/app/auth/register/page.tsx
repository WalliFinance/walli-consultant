'use client'

import createUser from "@/src/utils/createUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function Register(){
  const createUserForm = z.object({
    name:z.string()
    .min(1, "O nome é obrigatório"),
    email:z.string()
    .min(1,"O email é obrigatório").email("Formato de email invalido"),
    phone:z.string()
    .min(11,"Formato de numero invalido"),
    password:z.string()
    .min(1,"A senha é obrigatória"),
    confirmPassword:z.string()
    .min(1,"A confirmação de senha é obrigatória"),
    date: z.string()
    .min(1,"A data é obrigatória")
  }).refine((data)=>data.password === data.confirmPassword,{
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
  })


  type userData = z.infer<typeof createUserForm>

  const { register, handleSubmit, formState: { errors } } = useForm<userData>({resolver:zodResolver(createUserForm)})

  const onSubmit = (dataForm:userData)=>{
    createUser(dataForm.name,dataForm.email,dataForm.phone,dataForm.password,dataForm.confirmPassword,new Date(dataForm.date))
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nome</label>
        {errors.name && <p>{errors.name.message}</p>}
        <input 
        type="text" 
        {...register("name")}
        tabIndex={2}
        aria-label="Input de nome"
        />
        <label htmlFor="email">Email</label>
        {errors.email && <p>{errors.email.message}</p>}
        <input 
        type="text" 
        {...register("email")}
        tabIndex={3}
        aria-label="Input de email"
        />
        <label htmlFor="phone">Phone</label>
        {errors.phone && <p>{errors.phone.message}</p>}
        <input 
        type="text" 
        {...register("phone")}
        tabIndex={4}
        aria-label="Input de telefone"
        />
        <label htmlFor="password">Senha</label>
        {errors.password && <p>{errors.password.message}</p>}
        <input 
        type="password" 
        {...register("password")}
        tabIndex={5}
        aria-label="Input de senha"
        />
        <label htmlFor="confirmPassword">Confirmação de senha</label>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <input 
        type="password" 
        {...register("confirmPassword")}
        tabIndex={6}
        aria-label="Input de confirmação de senha"
        />
        <label htmlFor="birthday">Data de nascimento</label>
        {errors.date && <p>{errors.date.message}</p>}
        <input 
        type="date" 
        {...register("date")}
        tabIndex={7}
        aria-label="Input de data de nascimento mes dia ano"
        />
        <button tabIndex={8} aria-label="Botão para se registar">Registrar</button>
      </form>
    </>
  )
}