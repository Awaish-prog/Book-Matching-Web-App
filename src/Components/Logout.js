import "../CSS/UserLogin.css"
import { useNavigate } from "react-router-dom"

export default function Logout({userName}){
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem(userName)
        navigate("/")
    }
    return (
        <button className="button logout" onClick={logout}>Logout</button>
    )
}