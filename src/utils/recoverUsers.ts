import { FormEvent } from 'react';
import { User,Users} from "../@types/user"

export default async function recoverUserByEmail(ev:FormEvent,email:string,password:string){
ev.preventDefault()
const getDbUsers = await fetch('http://localhost:3334/users')
const converseDb:Users[]= await getDbUsers.json()
const checkEmailExists = converseDb.filter(user=>user.email === email)
const checkPasswordMatch = checkEmailExists.filter(user=>user.password === password)


if(checkEmailExists.length>0 && checkPasswordMatch.length>0){
    const newUserOnline : User = {
        name: checkPasswordMatch[0].name,
        email:checkPasswordMatch[0].email,
        birthday: checkPasswordMatch[0].birthday,
        _id: checkPasswordMatch[0]._id,
        phone: checkPasswordMatch[0].phone
    }

    localStorage.setItem('Usuario logado', JSON.stringify(newUserOnline))

    setTimeout(() => {
        window.location.href='/dashboard'
    }, 500);
}else{
    alert('Usuario não encontrado')
}
}