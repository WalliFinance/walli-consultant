'use client'

import createProcess from "@/src/utils/createProcess"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function ProcessPage(){
    const createProcessForm = z.object({
       clientName: z.string()
       .min(1,"Nome é obrigatório"),
       clientBirthday: z.string()
       .min(1,"A data de nascimento é obrigatória"),
       startProcess:z.string()
       .min(1,"A data de inicio de processo é obrigatória"),
       houseValue:z.string()
       .min(1,"O valor do imovel é obrigatório"),
       financedValue:z.string()
       .min(1,"O valor de financiamento é obrigatório"),
       installments:z.string()
       .min(1,"O numero de parcelas é obrigatório"),
       clientEmail:z.string()
       .min(1,"O email do cliente é obrigatório").email("Formato de email invalido"),
       clientPhone:z.string()
       .min(11,"Formato de telefone invalido") 
    })

    type processData = z.infer<typeof createProcessForm>

    const {register, handleSubmit, formState:{errors}} = useForm<processData>({resolver:zodResolver(createProcessForm)})

    const onSubmit = (data:processData)=>{
        createProcess(data.clientName,new Date(data.clientBirthday),new Date(data.startProcess),data.houseValue,data.financedValue,data.installments,data.clientEmail,data.clientPhone)
    }

    return(
        <>
            <h1 tabIndex={10}>Processo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="clientName">Nome do proponente</label>
                {errors.clientName && <p>{errors.clientName.message}</p>}
                <input 
                type="text" 
                {...register("clientName")}
                tabIndex={11}
                aria-label="Input nome de proponente"
                />
                <label htmlFor="clientBirthday">Data de nascimento proponente</label>
                {errors.clientBirthday && <p>{errors.clientBirthday.message}</p>}
                <input 
                type="date" 
                {...register("clientBirthday")}
                tabIndex={12}
                aria-label="Input data de nascimento do proponente mes dia ano"
                />
                <label htmlFor="startProcess">Data de inicio do processo</label>
                {errors.startProcess && <p>{errors.startProcess.message}</p>}
                <input 
                type="date" 
                {...register("startProcess")}
                tabIndex={13}
                aria-label="Input data de inicio do processo mes dia ano"
                />
                <label htmlFor="houseValue">Valor do imovel</label>
                {errors.houseValue && <p>{errors.houseValue.message}</p>}
                <input 
                type="text"
                {...register("houseValue")}
                tabIndex={14}
                aria-label="Input valor do imovel"
                />
                <label htmlFor="financedValue">Valor financiado</label>
                {errors.financedValue && <p>{errors.financedValue.message}</p>}
                <input 
                type="text"
                {...register("financedValue")}
                tabIndex={15}
                aria-label="Input valor financiado"
                />
                <label htmlFor="installments">Numero de parcelas</label>
                {errors.installments && <p>{errors.installments.message}</p>}
                <input 
                type="number" 
                {...register("installments")}
                tabIndex={16}
                aria-label="Input numero de parcelas"
                />
                <label htmlFor="clientEmail">Email do proponente</label>
                {errors.clientEmail && <p>{errors.clientEmail.message}</p>}
                <input 
                type="text" 
                {...register("clientEmail")}
                tabIndex={17}
                aria-label="Input email do proponente"
                />
                <label htmlFor="clientPhone">Telefone do proponente</label>
                {errors.clientPhone && <p>{errors.clientPhone.message}</p>}
                <input 
                type="text" 
                {...register("clientPhone")}
                tabIndex={18}
                aria-label="Input telefone do proponente"
                />
                <button tabIndex={19} aria-label="Botão para registrar processo na plataforma">Registrar</button>
            </form>
        </>
    )
}