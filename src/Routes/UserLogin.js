import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser } from "../ApiCalls/ApiCalls"
import { CurrentUserContext } from "../App"


export default function UserLogin(updateCurrentUser){
    const [userName, setUserName] = useState("")
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const navigate = useNavigate()
    
    function changeUserName(e){
        setUserName(e.target.value)
    }
    
    async function submitLoginForm(e){
        e.preventDefault()
        const [status, token] = await createUser(userName)
        localStorage.setItem(userName, token)
        setCurrentUser(userName)
        status ? navigate("/userInput") : console.log("Error");
    }
    useEffect(() => {
        setCurrentUser("")
    })
    return (
        <section className="">
            <form onSubmit={submitLoginForm}>
                <input type="text" value={userName} onChange={changeUserName} required />
                <input type="submit" value="Login" />
            </form>
        </section>
    )
}