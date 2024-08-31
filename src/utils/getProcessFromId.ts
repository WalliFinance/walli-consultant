import { ProcessInDb} from './../@types/process';
export default async function getProcessFromId(id:string){
    const dbUrl = process.env.NEXT_PUBLIC_API_URL2
    const processDb = await fetch(`${dbUrl}/${id}`) 
    const converseDB: ProcessInDb = await processDb.json()
    return converseDB
}