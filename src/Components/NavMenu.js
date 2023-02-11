
import { Link } from "react-router-dom";


export default function NavMenu(){
    return (
        <header className="nav-bar">
            <ul>
                <Link to="/userInput"><li>Input Form</li></Link>
                <Link to="/bookMatchingInterface"><li>View Data</li></Link>
            </ul>
        </header>
    )
}