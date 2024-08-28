'use client'

import createSchedule from "@/src/utils/createSchedule";
import { useState } from "react";

export default function Schedule(){
    const [subject,setSubject] = useState('')
    const [date,setDate] = useState(new Date())
    const [startTime,setStartTime] = useState('')
    const [endTime,setEndTime] = useState('')
      //Ano,mes,dia,horas,minutos FORMATO DE DATA//

    return(
        <>
        <h1>Compromisso</h1>
        <form onSubmit={(ev)=>createSchedule(ev,subject,date,startTime,endTime)}>
            <label htmlFor="id">Identificador</label>
            <input 
            type="text" 
            id='id'
            name="id"
            onChange={(ev)=>setSubject(ev.currentTarget.value)}
            />

            <label htmlFor="date">Data</label>
            <input 
            type="date" 
            id='date'
            name="date"
            onChange={(ev)=>setDate(new Date(ev.currentTarget.value))}
            />

            <label htmlFor="startTime">Horario de inicio</label>
            <input 
            type="text" 
            id='startTime'
            name="startTime"
            onChange={(ev)=>setStartTime(ev.currentTarget.value)}
            />

            <label htmlFor="endTime">Horario de termino</label>
            <input 
            type="text" 
            id='endTime'
            name="endTime"
            onChange={(ev)=>setEndTime(ev.currentTarget.value)}
            />
            
            <button>Agendar</button>
        </form>
        </>
    )
}