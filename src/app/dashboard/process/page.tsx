export default function ProcessPage(){
    return(
        <>
            <h1>Processo</h1>
            <form>
                <label htmlFor="clientName">Nome do proponente</label>
                <input 
                type="text" 
                id="clientName"
                name="clientName"
                />
                <label htmlFor="clientBirthday">Data de nascimento proponente</label>
                <input 
                type="date" 
                id="clientBirthday"
                name="clientBirthday"
                />
                <label htmlFor="startProcess">Data de inicio do processo</label>
                <input 
                type="date" 
                id="startProcess"
                name="startProcess"
                />
                <label htmlFor="houseValue">Valor do imovel</label>
                <input 
                type="text"
                id="houseValue"
                name="houseValue"
                />
                <label htmlFor="installments">Numero de parcelas</label>
                <input 
                type="number" 
                name="installments"
                id="installments"
                />
                <label htmlFor="clientEmail">Email do proponente</label>
                <input 
                type="text" 
                name="clientEmail"
                id="clientEmail"
                />
                <label htmlFor="clientPhone">Telefone do proponente</label>
                <input 
                type="text" 
                name="clientPhone"
                id="clientPhone"
                />
                <button>Registrar</button>
            </form>
        </>
    )
}