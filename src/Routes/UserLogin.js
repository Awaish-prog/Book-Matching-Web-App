import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser } from "../ApiCalls/ApiCalls"
import "../CSS/UserLogin.css"

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
        <section className="userLogin">
            <h1>Enter your name to use the app</h1>
            <form onSubmit={submitLoginForm} className="loginForm">
                <input className="nameInput" type="text" value={userName} onChange={changeUserName} required placeholder="Name" />
                <input className="button" type="submit" value="Login" />
            </form>
        </section>
    )
}