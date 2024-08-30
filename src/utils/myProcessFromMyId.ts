import { User } from '../@types/user';
import { ProcessInDb} from './../@types/process';
export default async function myProcessFromMyId(){
    const userLocal = localStorage.getItem('Usuario logado')
    const processDb = await fetch('http://localhost:3339/process') 
    const converseDB: ProcessInDb[] = await processDb.json()
    if(userLocal){
        const converseUser:User = JSON.parse(userLocal)
        const processFromLocal = converseDB.filter(process=>process.consultantId === converseUser._id)
        return processFromLocal
    }
}