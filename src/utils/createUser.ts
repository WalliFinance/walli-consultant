import { FormEvent } from "react"

export default async function createUser(name:string,email:string,phone:string,password:string,confirmPassword:string,birthday:Date){
    const dbUrl = process.env.NEXT_PUBLIC_API_URL
    if(name!=='' && email!=='' && phone!=='' && password!=='' && confirmPassword!=='' && birthday && password === confirmPassword){
        const createUser = await fetch(`${dbUrl}`,{
            method: "POST",
            body: JSON.stringify(
              {name,email,password,birthday,phone}
            ),
            headers:{
              "Content-Type": "application/json"
            }
        })
    
        setTimeout(() => {
            alert('Usuario cadastrado com sucesso')
            window.location.href = '/auth/'
        }, 1000);
    }else{
        alert('Preencha todos os campos corretamente')
    }
}