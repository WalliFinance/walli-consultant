import { FormEvent } from 'react';
import { User } from '../@types/user';
export default async function createProcess(ev:FormEvent,clientName:string,clientBirthday:Date,startProcess:Date,houseValue:string,installments:string,clientEmail:string,clientPhone:string) {
    ev.preventDefault()
    if(clientName!=='' && clientBirthday && startProcess && houseValue!=='' && installments!=='' && clientEmail!=='' && clientPhone!==''){
        const localUser = localStorage.getItem('Usuario logado')
            if(localUser){
                const conversedUser:User = JSON.parse(localUser)
                const createProcess = await fetch(`http://localhost:3339/process`,{
                    method: "POST",
                    body: JSON.stringify(
                      {clientBirthday,clientEmail,clientName,clientPhone,processStart:startProcess,houseValue,installments,consultantId:conversedUser._id,status:'Em andamento'}
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