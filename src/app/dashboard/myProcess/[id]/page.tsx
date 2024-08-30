'use client'

import getProcessFromId from "@/src/utils/getProcessFromId"
import { FormEvent, useEffect, useRef, useState } from "react"
import styles from './page.module.scss'
import { StepStatus } from "@syncfusion/ej2/navigations"

export default function ProcessPageInfos({params}:any){
    const refClient = useRef<HTMLHeadingElement>(null)
    const refClientEmail = useRef<HTMLParagraphElement>(null)
    const refClientPhone = useRef<HTMLParagraphElement>(null)
    const refValue = useRef<HTMLParagraphElement>(null)
    const [status,setStatus] = useState('Selecione uma opção')

    useEffect(()=>{
        async function insertProcessInfo() {
            const myProcess = await getProcessFromId(params.id)
            const converseHouseValue = Number(myProcess.houseValue)
            const numberWithPoints = `${converseHouseValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            if(refClient.current && refValue.current && refClientEmail.current && refClientPhone.current){
                refClient.current.innerText = myProcess.clientName
                refValue.current.innerText = `Valor do financiamento : R$ ${numberWithPoints}`
                refClientEmail.current.innerText = `Email do cliente : ${myProcess.clientEmail}`
                refClientPhone.current.innerText = `Telefone do cliente : ${myProcess.clientPhone}`
            }
        }
        insertProcessInfo()
    })

    async function changeProcessStatus(ev:FormEvent) {
        ev.preventDefault()
        const updateProcess = await fetch(`http://localhost:3339/process/${params.id}`,{
            method: "PUT",
            body: JSON.stringify(
              {status:status}
            ),
            headers:{
              "Content-Type": "application/json"
            }
        })
        setTimeout(() => {
            alert('Seu processo foi atualizado com sucesso')
            window.location.reload()
        }, 1000);
    }

    return(
        <main className={styles.main}>
            <h1 ref={refClient}></h1>
            <p ref={refValue}></p>
            <p ref={refClientEmail}></p>
            <p ref={refClientPhone}></p>

            <form onSubmit={(ev)=>changeProcessStatus(ev)} >
                <label htmlFor="status">Alterar status</label>
                <select 
                name="status" id="status"
                onChange={(ev)=>setStatus(ev.currentTarget.value)}
                >
                    <option value="">{status}</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Analise bancaria">Analise bancaria</option>
                    <option value="Envio de documentos">Envio de documentos</option>
                    <option value="Assinatura de contrato">Assinatura de contrato</option>
                </select>

                <button>Alterar status</button>
            </form>
        </main>
    )
}