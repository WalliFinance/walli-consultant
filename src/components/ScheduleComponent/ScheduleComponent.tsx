'use client'
import { ScheduleComponent, Day, Week,Month,Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import './globals.css'
import { useEffect, useState } from 'react';

export default function ScheduleComponents(){
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
    const appointments = [{
      Id: 1,
      Subject: 'Reunião de Negócios',
      //Ano,mes,dia,horas,minutos FORMATO DE DATA//
      StartTime: new Date(2024, 7, 28, 10, 0),
      EndTime: new Date(2024, 7, 28, 12, 0),
    }];
    setData(appointments);
    }, []);

    return(
        <ScheduleComponent 
        width={800}
        height={550} 
        eventSettings={{
            dataSource:data
        }}>
            <ViewsDirective>
                <ViewDirective option="Day"/>
                <ViewDirective option="Week"/>
                <ViewDirective option="Month"/>
            </ViewsDirective>

            <Inject services={[Day,Week,Month]}/>
        </ScheduleComponent>
    )
}