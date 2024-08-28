'use client'

import Image from "next/image";
import taskSvg from '@/public/assets/task-svg.svg'
import processSvg from '@/public/assets/process-svg.svg'
import expandSvg from '@/public/assets/expand-icon.svg'
import styles from './layout.module.scss'
import "./globals.scss";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User } from "@/src/@types/user";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
    const [count,setCount] = useState(1)
    const refMenu = useRef<HTMLBodyElement>(null)
    const refName = useRef<HTMLHeadingElement>(null)

    useEffect(()=>{
      function insertInfosOfUser(){
      const userLocal = localStorage.getItem('Usuario logado')
      if(userLocal && refName.current){
        const convertUser: User = JSON.parse(userLocal) 
        refName.current.innerText = convertUser.name[0]
      }else{
        alert('Você não está logado')
        setTimeout(() => {
          window.location.href = '/auth/'
        }, 500);
      }
      }

      insertInfosOfUser()
    },[])

    function exitAplication(){
    localStorage.removeItem('Usuario logado')
    setTimeout(() => {
      window.location.href = '/auth/'
    }, 500);
    }

    function expandMenu(){
        setCount(count+1)
        if(count%2 == 0){
            if(refMenu.current){
                refMenu.current.style.height = '30px'
                refMenu.current.style.backgroundColor = '#669BBC'
                refMenu.current.style.color = '#000000'
            }
        } else{
            if(refMenu.current){
                refMenu.current.style.height = '80px'
                refMenu.current.style.backgroundColor = '#FFAFCC'
                refMenu.current.style.color = '#FFFFFF'
            }
        }
    }

  return (
    <html lang="en">
      <body className={styles.body}>
        <header>
          <Link href={'/dashboard'}><h1>Logo</h1></Link>
        </header>
      <main className={styles.main}>
        <aside>
            <h2 ref={refName}>L</h2>
            <div className={styles.menus}>
                <section ref={refMenu}>
                <article>
                <h3>Ferramentas</h3>
                <Image
                width={12}
                height={12}
                src={expandSvg}
                alt="Expand svg icon"
                onClick={expandMenu}
                />
                </article>
                <ul>
                    <div>
                        <Link href={'/dashboard/process'}><li>Adicionar processo</li></Link>
                        <Image
                        src={processSvg}
                        width={12}
                        height={12}
                        alt="process icon"
                        />
                    </div>
                    <div>
                        <Link href={'/dashboard/schedule'}><li>Adicionar compromisso</li></Link>
                        <Image
                        src={taskSvg}
                        width={12}
                        height={12}
                        alt="task icon"
                        />
                    </div>
                </ul>
                </section>

                <footer>
                    <span>Configurações</span>
                    <span onClick={exitAplication}>Sair</span>
                </footer>
            </div>
        </aside>

        <article className={styles.childrenContainer}>
        {children}
        </article>

    </main>
      </body>
    </html>
  );
}
