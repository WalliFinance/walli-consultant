import ScheduleComponents from '@/src/components/ScheduleComponent/ScheduleComponent'
import styles from './page.module.scss'

export default function HomeDashboard(){
  return(
    <section className={styles.main}>
        <article>
          <h3>Receita</h3>
          <p>R$ 760,00</p>
        </article>
        <article>
          <h3>Minha agenda</h3>
          <ScheduleComponents/>
        </article>
        
    </section>
  )  
}
