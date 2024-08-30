'use client'

import myProcessFromMyId from "@/src/utils/myProcessFromMyId"
import { useEffect, useRef } from "react"
import styles from './page.module.scss'

export default function MyProcess(){
    const refMainSection = useRef<HTMLBodyElement>(null)
    
    useEffect(()=>{
        async function insertMyProcess(){
            const myProcessDb = await myProcessFromMyId()
            if(myProcessDb && refMainSection.current){
                for(let i=0; i<myProcessDb?.length;i++){
                    const article = document.createElement('article')
                    const clientName = document.createElement('h3')
                    clientName.innerText = myProcessDb[i].clientName
                    const houseValue = document.createElement('p')
                    const converseHouseValue = Number(myProcessDb[i].houseValue)
                    const numberWithPoints = `${converseHouseValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    houseValue.innerText = `R$ ${numberWithPoints}`

                    const button = document.createElement('a')
                    button.innerText = 'Ver mais'
                    button.href = `/dashboard/myProcess/${myProcessDb[i]._id}`
                    article.append(clientName,houseValue,button)
                    refMainSection.current.append(article)
                }
            }
        }

        insertMyProcess()
    },[])
    return(
        <>
            <h1>Meus processos</h1>
            <section ref={refMainSection} className={styles.main}></section>
        </>
    )
}