export default function Register(){
  return(
    <>
      <form>
        <label htmlFor="name">Nome</label>
        <input 
        type="text" 
        name="name"
        id="name"
        />
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email"
        id="email"
        />
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password"
        id="password"
        />
        <label htmlFor="confirmPassword">Confirmação de senha</label>
        <input 
        type="password" 
        name="confirmPassword"
        id="confirmPassword"
        />
        <label htmlFor="avatar">Avatar</label>
        <input 
        type="file" 
        name="avatar"
        id="avatar"
        />
        <label htmlFor="birthday">Data de nascimento</label>
        <input 
        type="text" 
        name="birthday"
        id="birthday"
        />
        <button>Registrar</button>
      </form>
    </>
  )
}