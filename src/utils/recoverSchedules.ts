import { Schedule } from "../@types/schedule"
import { User } from "../@types/user"

export default async function recoverSchedulesFromLocalUser(){
    const dbUrl = process.env.NEXT_PUBLIC_API_URL3
    const createSchedules = await fetch(`${dbUrl}`)
    const converseDb: Schedule[] = await createSchedules.json()
    const localUser = localStorage.getItem('Usuario logado')
    if(localUser){
        const converseUser: User = JSON.parse(localUser)
        const searchSchedule = converseDb.filter( schedule=> schedule.ownerid === converseUser._id)
        return searchSchedule
    }  
}