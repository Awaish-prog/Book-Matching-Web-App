import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CurrentUserContext } from "../App"

export default function Logout(){
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)

    function logout(){
        setCurrentUser("")
        navigate("/")
    }
    return (
        <button onClick={logout}>Logout</button>
    )
}