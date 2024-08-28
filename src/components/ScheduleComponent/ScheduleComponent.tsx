'use client'
import { ScheduleComponent, Day, Week,Month,Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import './globals.css'
import { useEffect, useState } from 'react';
import recoverSchedules from '@/src/utils/recoverSchedules';

export default function ScheduleComponents(){
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        async function recoverAllSchedulesAndPrint(){
        const recoverDb = await recoverSchedules()
        const finishDb = []
        for(let i =0; i<recoverDb.length;i++){
            finishDb.push({
                Id: recoverDb[i]._id,
                Subject:recoverDb[i].Subject,
                StartTime: new Date(recoverDb[i].StartTime),
                EndTime:new Date(recoverDb[i].EndTime)  
            })
        }
        setData(finishDb)
        }

        recoverAllSchedulesAndPrint()
    }, []);

    return(
        <ScheduleComponent 
        width={800}
        height={550} 
        eventSettings={{dataSource:data}}
        >
            <ViewsDirective>
                <ViewDirective option="Day"/>
                <ViewDirective option="Week"/>
                <ViewDirective option="Month"/>
            </ViewsDirective>

            <Inject services={[Day,Week,Month]}/>
        </ScheduleComponent>
    )
}