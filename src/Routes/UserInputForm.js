import { useEffect, useState } from "react";
import NavMenu from "../Components/NavMenu";
import { sendUserData } from "../ApiCalls/ApiCalls";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Components/Logout";
import "../CSS/UserLogin.css"
import "../CSS/UserInputData.css"

export default function UserInputForm(){
    const navigate = useNavigate()
    const location = useLocation()
    const [genres, setGenres] = useState([])
    const [books, setBooks] = useState([])
    function insertValueInGenres(genre){
        setGenres((prev) => {
            prev.includes(genre) ? prev.shift(genre) : prev.push(genre)
            return prev
        })
    }
    function insertValueInBooks(book){
        setBooks((prev) => {
            prev.includes(book) ? prev.shift(book) : prev.push(book)
            return prev
        })
    }
    async function sendData(e){
        e.preventDefault()
        await sendUserData(location.state.userName, genres, books, localStorage.getItem(location.state.userName))
        navigate("/bookMatchingInterface", {state: {userName: location.state.userName.toLowerCase()}})
    }
    useEffect(() => {
        if(!localStorage.getItem(location.state.userName.toLowerCase())){
            navigate("/")
        }
    }, [])
    return (
        <>
            <NavMenu userName={location.state.userName}/>
            <Logout userName={location.state.userName}/>
            <form onSubmit={sendData} className="userInputForm">
                <h1>Please select Genres and Books</h1>
                <h3>Genres</h3>
                    <div>
                    <input id="tragedy" type="checkbox" onChange={() => insertValueInGenres("Tragedy")} />
                    <label htmlFor="tragedy">Tragedy</label>
                    </div>
                    
                   <div>
                   <input id="novel" type="checkbox" onChange={() => insertValueInGenres("Novel")} />
                    <label htmlFor="novel">Novel</label>
                   </div>
                    
                    <div>
                    <input id="drama" type="checkbox" onChange={() => insertValueInGenres("Drama")} />
                    <label htmlFor="drama">Drama</label>
                    </div>
                    
                    <div>
                    <input id="biography" type="checkbox" onChange={() => insertValueInGenres("Biography")} />
                    <label htmlFor="biography">Biography</label>
                    </div>
                    
                <h3>Books</h3>
                    <div>
                    <input id="Macbeth" type="checkbox" onChange={() => insertValueInBooks("Macbeth")} />
                    <label htmlFor="Macbeth">Macbeth</label>
                    </div>
                    
                    <div>
                    <input id="KingLear" type="checkbox" onChange={() => insertValueInBooks("King Lear")} />
                    <label htmlFor="KingLear">King Lear</label>
                    </div>
                    
                    <div>
                    <input id="TheGreatGatsby" type="checkbox" onChange={() => insertValueInBooks("The Great Gatsby")} />
                    <label htmlFor="TheGreatGatsby">The Great Gatsby</label>
                    </div>
                    
                    <div>
                    <input id="The Kite Runner" type="checkbox" onChange={() => insertValueInBooks("The Kite Runner")} />
                    <label htmlFor="Catch-22">Catch-22</label>
                    </div>
                   
                    <div>
                    <input id="Catch-22" type="checkbox" onChange={() => insertValueInBooks("Catch-22")} />
                    <label htmlFor="The Kite Runner">The Kite Runner</label>
                    </div>
                    
                    <div>
                    <input id="Hamlet" type="checkbox" onChange={() => insertValueInBooks("Hamlet")} />
                    <label htmlFor="Hamlet">Hamlet</label>
                    </div>
                    
                    <div>
                    <input id="SteveJobs" type="checkbox" onChange={() => insertValueInBooks("Steve Jobs")} />
                    <label htmlFor="SteveJobs">Steve Jobs</label>
                    </div>
                    
                    <div>
                    <input id="WingsofFire" type="checkbox" onChange={() => insertValueInBooks("Wings of Fire")} />
                    <label htmlFor="WingsofFire">Wings of Fire</label>
                    </div>
                    
                    <input className="button" type="submit" />
            </form>
        </>
    )
}