import { User } from '../@types/user';
import { ProcessInDb} from './../@types/process';
export default async function myProcessFromMyId(){
    const dbUrl = process.env.NEXT_PUBLIC_API_URL2
    const userLocal = localStorage.getItem('Usuario logado')
    const processDb = await fetch(`${dbUrl}`) 
    const converseDB: ProcessInDb[] = await processDb.json()
    if(userLocal){
        const converseUser:User = JSON.parse(userLocal)
        const processFromLocal = converseDB.filter(process=>process.consultantid === converseUser._id)
        return processFromLocal
    }
}