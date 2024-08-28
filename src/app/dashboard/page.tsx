'use client'


import ScheduleComponents from '@/src/components/ScheduleComponent/ScheduleComponent'
import styles from './page.module.scss'
import { useEffect, useRef } from 'react'
import { User } from '@/src/@types/user'
import recoverProcessById from '@/src/utils/recoverProcessById'

export default function HomeDashboard(){
  const refBalance = useRef<HTMLParagraphElement>(null)

  useEffect(()=>{
    async function insertBalance(){
      if(refBalance.current){
        const getMyBalance = await recoverProcessById()
        refBalance.current.innerText = `R$ ${getMyBalance}`
      }
    }

    insertBalance()
  },[])
  return(
    <section className={styles.main}>
        <article>
          <h3>Receita</h3>
          <p ref={refBalance}></p>
        </article>
        <article>
          <h3>Minha agenda</h3>
          <ScheduleComponents/>
        </article>
    </section>
  )  
}
