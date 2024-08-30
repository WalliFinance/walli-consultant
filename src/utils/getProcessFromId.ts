import { User } from '../@types/user';
import { ProcessInDb} from './../@types/process';
export default async function getProcessFromId(id:string){
    const processDb = await fetch(`http://localhost:3339/process/${id}`) 
    const converseDB: ProcessInDb = await processDb.json()
    return converseDB
}