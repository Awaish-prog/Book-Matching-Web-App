import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser } from "../ApiCalls/ApiCalls"


export default function UserLogin(){
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()
    
    function changeUserName(e){
        setUserName(e.target.value)
    }
    
    async function submitLoginForm(e){
        e.preventDefault()
        const [status, token] = await createUser(userName)
        localStorage.setItem(userName.toLowerCase(), token)
        status ? navigate("/userInput", {state: {userName: userName.toLowerCase()}}) : console.log("Error");
    }
    return (
        <section className="">
            <form onSubmit={submitLoginForm}>
                <input type="text" value={userName} onChange={changeUserName} required />
                <input type="submit" value="Login" />
            </form>
        </section>
    )
}