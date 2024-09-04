'use client'

import createProcess from "@/src/utils/createProcess"
import { useState } from "react"

export default function ProcessPage(){
    const [clientName,setClientName] = useState('')
    const [clientBirthday,setClientBirthday] = useState(new Date())
    const [startProcess,setStartProcess] = useState(new Date())
    const [houseValue,setHouseValue] = useState('')
    const [financedValue,setFinancedValue] = useState('')
    const [installments,setInstallments] = useState('')
    const [clientEmail,setClientEmail] = useState('')
    const [clientPhone,setClientPhone] = useState('')
    return(
        <>
            <h1>Processo</h1>
            <form onSubmit={(ev)=>createProcess(ev,clientName,clientBirthday,startProcess,houseValue,financedValue,installments,clientEmail,clientPhone)}>
                <label htmlFor="clientName">Nome do proponente</label>
                <input 
                type="text" 
                id="clientName"
                name="clientName"
                onChange={(ev)=>setClientName(ev.currentTarget.value)}
                />
                <label htmlFor="clientBirthday">Data de nascimento proponente</label>
                <input 
                type="date" 
                id="clientBirthday"
                name="clientBirthday"
                onChange={(ev)=>setClientBirthday(new Date(ev.currentTarget.value))}
                />
                <label htmlFor="startProcess">Data de inicio do processo</label>
                <input 
                type="date" 
                id="startProcess"
                name="startProcess"
                onChange={(ev)=>setStartProcess(new Date(ev.currentTarget.value))}
                />
                <label htmlFor="houseValue">Valor do imovel</label>
                <input 
                type="text"
                id="houseValue"
                name="houseValue"
                onChange={(ev)=>setHouseValue(ev.currentTarget.value)}
                />
                <label htmlFor="financedValue">Valor financiado</label>
                <input 
                type="text"
                id="financedValue"
                name="financedValue"
                onChange={(ev)=>setFinancedValue(ev.currentTarget.value)}
                />
                <label htmlFor="installments">Numero de parcelas</label>
                <input 
                type="number" 
                name="installments"
                id="installments"
                onChange={(ev)=>setInstallments(ev.currentTarget.value)}
                />
                <label htmlFor="clientEmail">Email do proponente</label>
                <input 
                type="text" 
                name="clientEmail"
                id="clientEmail"
                onChange={(ev)=>setClientEmail(ev.currentTarget.value)}
                />
                <label htmlFor="clientPhone">Telefone do proponente</label>
                <input 
                type="text" 
                name="clientPhone"
                id="clientPhone"
                onChange={(ev)=>setClientPhone(ev.currentTarget.value)}
                />
                <button>Registrar</button>
            </form>
        </>
    )
}