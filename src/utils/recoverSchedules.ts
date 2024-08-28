import { Schedule } from "../@types/schedule"
import { User } from "../@types/user"

export default async function recoverSchedulesFromLocalUser(){
    const createSchedules = await fetch(`http://localhost:3333/schedules`)
    const converseDb: Schedule[] = await createSchedules.json()
    const localUser = localStorage.getItem('Usuario logado')
    if(localUser){
        const converseUser: User = JSON.parse(localUser)
        const searchSchedule = converseDb.filter( schedule=> schedule.ownerId === converseUser._id)
        return searchSchedule
    }  
}