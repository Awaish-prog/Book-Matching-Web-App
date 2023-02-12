
import { Link, useNavigate } from "react-router-dom";


export default function NavMenu({userName}){
    const navigate = useNavigate()
    function goToInputForm(){
        navigate("/userInput", {state: {userName: userName.toLowerCase()}})
    }
    function goToBookMatchdata(){
        navigate("/bookMatchingInterface", {state: {userName: userName.toLowerCase()}})
    }
    return (
        <header className="nav-bar">
            <ul>
                <li onClick={goToInputForm}>Input Form</li>
                <li onClick={goToBookMatchdata}>View Data</li>
            </ul>
        </header>
    )
}