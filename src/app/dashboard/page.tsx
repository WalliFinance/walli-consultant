'use client'


import ScheduleComponents from '@/src/components/ScheduleComponent/ScheduleComponent'
import styles from './page.module.scss'
import { useEffect, useRef } from 'react'

import recoverProcessById from '@/src/utils/recoverProcessById'
import recoverProcessComission from '@/src/utils/recoverProcessComision'

export default function HomeDashboard(){
  const refBalance = useRef<HTMLParagraphElement>(null)
  const refComission = useRef<HTMLParagraphElement>(null)
  const refFirstContainer = useRef<HTMLDivElement>(null)
  const refSecondContainer = useRef<HTMLDivElement>(null)

  function showFirstHintContainer(){
    if(refFirstContainer.current){
      refFirstContainer.current.style.display = 'block'
    }
  }

  function dontShowFirstHintContainer(){
    if(refFirstContainer.current){
      refFirstContainer.current.style.display = 'none'
    }
  }


  function showSecondHintContainer(){
    if(refSecondContainer.current){
      refSecondContainer.current.style.display = 'block'
    }
  }

  function dontShowSecondHintContainer(){
    if(refSecondContainer.current){
      refSecondContainer.current.style.display = 'none'
    }
  }

  useEffect(()=>{
    async function insertBalance(){
      if(refBalance.current){
        const getMyBalance = await recoverProcessById()
        refBalance.current.innerText = `R$ ${getMyBalance}`
      }
    }

    async function insertComission() {
      if(refComission.current){
         const getMyComission = await recoverProcessComission()
         refComission.current.innerText = `R$ ${getMyComission}`
      }
    }
    insertComission()
    insertBalance()
  },[])
  return(
    <section className={styles.main}>
        <div className={styles.metrics}>
        <article>
          <h3 tabIndex={10}>Receita</h3>
          <span onMouseEnter={showFirstHintContainer} 
                onMouseLeave={dontShowFirstHintContainer}>?</span>
          <p ref={refBalance} tabIndex={11}></p>
        </article>

        <article>
          <h3 tabIndex={12}>Comissão</h3>
          <span onMouseEnter={showSecondHintContainer}
                onMouseLeave={dontShowSecondHintContainer}
          >?</span>
          <p ref={refComission} tabIndex={13}></p>
        </article>
        </div>
       
     
        <article>
          <h3>Minha agenda</h3>
          <ScheduleComponents/>
        </article>

        <div className={styles.infosContainer} ref={refFirstContainer}>
          <p>O valor apresentado corresponde ao total de financiamento de todos os imóveis que o consultor financiou. Esse montante reflete o compromisso e a dedicação do consultor em proporcionar soluções financeiras adequadas para seus clientes, ajudando-os a conquistar o sonho da casa própria.</p>
        </div>

        <div className={styles.infosContainer2} ref={refSecondContainer}>
          <p>O valor apresentado representa a comissão que o consultor receberá ao final de cada processo de financiamento concluído. Este montante reflete a compensação pelo trabalho dedicado em ajudar os clientes a concretizar seus projetos imobiliários.</p>
        </div>
       
    </section>
  )  
}
