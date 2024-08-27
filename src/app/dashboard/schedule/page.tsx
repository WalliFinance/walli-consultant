export default function Schedule(){
      //Ano,mes,dia,horas,minutos FORMATO DE DATA//

    return(
        <>
        <h1>Compromisso</h1>
        <form>
            <label htmlFor="id">Identificador</label>
            <input 
            type="text" 
            id='id'
            name="id"
            />

            <label htmlFor="date">data</label>
            <input 
            type="date" 
            id='date'
            name="date"
            />

            <label htmlFor="startTime">Horario de inicio</label>
            <input 
            type="text" 
            id='startTime'
            name="startTime"
            />

            <label htmlFor="endTime">Horario de termino</label>
            <input 
            type="text" 
            id='endTime'
            name="endTime"
            />
            
            <button>Agendar</button>
        </form>
        </>
    )
}