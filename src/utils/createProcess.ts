import { FormEvent } from 'react';
import { User } from '../@types/user';
export default async function createProcess(ev:FormEvent,clientName:string,clientBirthday:Date,startProcess:Date,houseValue:string,financedValue:string,installments:string,clientEmail:string,clientPhone:string) {
    const dbUrl = process.env.NEXT_PUBLIC_API_URL2
    ev.preventDefault()
    if(clientName!=='' && clientBirthday && startProcess && houseValue!=='' && installments!=='' && clientEmail!=='' && clientPhone!==''){
        const localUser = localStorage.getItem('Usuario logado')
            if(localUser){
                const conversedUser:User = JSON.parse(localUser)
                const createProcess = await fetch(`${dbUrl}`,{
                    method: "POST",
                    body: JSON.stringify(
                      {clientBirthday,clientEmail,clientName,clientPhone,processStart:startProcess,houseValue,financedValue,installments,consultantId:conversedUser._id,status:'Em andamento'}
                    ),
                    headers:{
                      "Content-Type": "application/json"
                    }
                })
                setTimeout(() => {
                    alert('Processo criado com sucesso')
                }, 1000);
            }
    }else{
        alert('Preencha todos os campos')
    }
}