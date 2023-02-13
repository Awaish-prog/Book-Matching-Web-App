import { useNavigate } from "react-router-dom";
import "../CSS/NavMenu.css"

export default function NavMenu({userName}){
    const navigate = useNavigate()
    function goToInputForm(){
        navigate("/userInput", {state: {userName: userName.toLowerCase()}})
    }
    function goToBookMatchdata(){
        navigate("/bookMatchingInterface", {state: {userName: userName.toLowerCase()}})
    }
    return (
        <header className="navBar">
            <ul className="navList">
                <li className="navElement" onClick={goToInputForm}>Input Form</li>
                <li className="navElement" onClick={goToBookMatchdata}>View Data</li>
            </ul>
        </header>
    )
}