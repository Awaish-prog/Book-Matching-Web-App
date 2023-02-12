import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout({userName}){
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem(userName)
        navigate("/")
    }
    return (
        <button onClick={logout}>Logout</button>
    )
}