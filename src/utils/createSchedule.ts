import { FormEvent } from "react";
import { User } from "../@types/user";

export default async function createSchedule(ev:FormEvent,Subject:string,date:Date,StartTime:string,EndTime:string){
  const dbUrl = process.env.NEXT_PUBLIC_API_URL3
    ev.preventDefault()
    const year = date.getFullYear() 
    const day = date.getDate() + 1
    const month = date.getMonth()
    
    const startTimeDate = new Date(year, month,day,Number(StartTime),0)
    const endTimeDate = new Date(year, month,day,Number(EndTime),0)
    const localUser = localStorage.getItem('Usuario logado')

    if(localUser){
      const converseUser:User = JSON.parse(localUser)

      const createSchedule = await fetch(`${dbUrl}`,{
        method: "POST",
        body: JSON.stringify(
          {Subject,StartTime:startTimeDate,EndTime:endTimeDate,ownerId:converseUser._id
        }
        ),
        headers:{
          "Content-Type": "application/json"
        }
    })
    }

    setTimeout(() => {
        alert('Compromisso criado com sucesso')
    }, 1000);
}