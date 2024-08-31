import { User } from '../@types/user';
import { ProcessInDb } from './../@types/process';
export default async function recoverProcessById(){
    const dbUrl = process.env.NEXT_PUBLIC_API_URL2
    const userLocal = localStorage.getItem('Usuario logado')
    const processDb = await fetch(`${dbUrl}`) 
    const converseDB: ProcessInDb[] = await processDb.json()
    if(userLocal){
    const converseUser:User = JSON.parse(userLocal)
    const processFromLocal = converseDB.filter(process=>process.consultantid === converseUser._id)
    console.log(processFromLocal[0].housevalue)
        if(processFromLocal.length === 0){
        return 0   
    }
    const valuesArray = processFromLocal.map((item)=>Number(item.housevalue))
    const sumOfAllProcess = valuesArray.reduce((acc,cur)=>acc+cur)
    const numberWithPoints = `${sumOfAllProcess}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return numberWithPoints
    }
}