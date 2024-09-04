import { User } from '../@types/user';
import { ProcessInDb } from '../@types/process';
export default async function recoverProcessComission(){
    const dbUrl = process.env.NEXT_PUBLIC_API_URL2
    const userLocal = localStorage.getItem('Usuario logado')
    const processDb = await fetch(`${dbUrl}`) 
    const converseDB: ProcessInDb[] = await processDb.json()
    if(userLocal){
    const converseUser:User = JSON.parse(userLocal)
    const processFromLocal = converseDB.filter(process=>process.consultantid === converseUser._id)
        if(processFromLocal.length === 0){
        return 0   
    }
    const valuesArray = processFromLocal.map((item)=>Number(item.financedvalue))
    const sumOfAllProcess = valuesArray.reduce((acc,cur)=>acc+cur)
    const comissionValue = sumOfAllProcess/100
    const numberWithPoints = `${comissionValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return numberWithPoints
    }
}