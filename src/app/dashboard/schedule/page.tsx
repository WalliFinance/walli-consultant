'use client'

import createSchedule from "@/src/utils/createSchedule";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Schedule(){
    const [subject,setSubject] = useState('')
    const [date,setDate] = useState(new Date())
    const [startTime,setStartTime] = useState('')
    const [endTime,setEndTime] = useState('')
      //Ano,mes,dia,horas,minutos FORMATO DE DATA//

      const createScheduleForm = z.object({
        subject: z.string()
        .min(1,"O identificador é obrigatório"),
        date: z.string()
        .min(1,"A data é obrigatória"),
        startTime:z.string()
        .min(1,"O horario de inicio é obrigatório"),
        endTime:z.string()
        .min(1,"O horario de termino é obrigatório")
      })

      type scheduleData = z.infer<typeof createScheduleForm>

      const { register, handleSubmit, formState: { errors } } = useForm<scheduleData>({resolver:zodResolver(createScheduleForm)})

      const onSubmit = (dataForm:scheduleData)=>{
        createSchedule(dataForm.subject,new Date(dataForm.date),dataForm.startTime,dataForm.endTime)
      }
      
    return(
        <>
        <h1 tabIndex={10}>Compromisso</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="id">Identificador</label>
            {errors.subject && <p>{errors.subject.message}</p>}
            <input 
            type="text" 
            {...register("subject")}
            tabIndex={11}
            aria-label="Input de identificação do compromisso"
            />

            <label htmlFor="date">Data</label>
            {errors.date && <p>{errors.date.message}</p>}
            <input 
            type="date" 
            {...register("date")}
            tabIndex={12}
            aria-label="Input de data do compromisso mes dia ano"
            />

            <label htmlFor="startTime">Horario de inicio</label>
            {errors.startTime && <p>{errors.startTime.message}</p>}
            <input 
            type="text" 
            {...register("startTime")}
            tabIndex={13}
            aria-label="Input de horario de inicio do compromisso exemplo 17"
            />

            <label htmlFor="endTime">Horario de termino</label>
            {errors.endTime && <p>{errors.endTime.message}</p>}
            <input 
            type="text" 
            {...register("endTime")}
            tabIndex={14}
            aria-label="Input de horario de termino do compromisso exemplo 19"
            />
            
            <button tabIndex={15} aria-label="Botão de agendamento de compromisso">Agendar</button>
        </form>
        </>
    )
}