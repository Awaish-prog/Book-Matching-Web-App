import { useState } from "react";
import NavMenu from "../Components/NavMenu";
import { sendUserData } from "../ApiCalls/ApiCalls";
import { useLocation } from "react-router-dom";


export default function UserInputForm(){
    const [genres, setGenres] = useState([])
    const [books, setBooks] = useState([])
    const location = useLocation()
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
    function sendData(e){
        e.preventDefault()
        sendUserData(location.state.userName, genres, books)
    }
    return (
        <>
            <NavMenu />
            <form onSubmit={sendData}>
                <h3>Genres</h3>
                    <label htmlFor="tragedy">Tragedy</label>
                    <input id="tragedy" type="checkbox" onChange={() => insertValueInGenres("Tragedy")} />
                    <label htmlFor="novel">Novel</label>
                    <input id="novel" type="checkbox" onChange={() => insertValueInGenres("Novel")} />
                    <label htmlFor="drama">Drama</label>
                    <input id="drama" type="checkbox" onChange={() => insertValueInGenres("Drama")} />
                    <label htmlFor="biography">Biography</label>
                    <input id="biography" type="checkbox" onChange={() => insertValueInGenres("Biography")} />
                <h3>Books</h3>
                    <label htmlFor="Macbeth">Macbeth</label>
                    <input id="Macbeth" type="checkbox" onChange={() => insertValueInBooks("Macbeth")} />
                    <label htmlFor="KingLear">King Lear</label>
                    <input id="KingLear" type="checkbox" onChange={() => insertValueInBooks("King Lear")} />
                    <label htmlFor="TheGreatGatsby">The Great Gatsby</label>
                    <input id="TheGreatGatsby" type="checkbox" onChange={() => insertValueInBooks("The Great Gatsby")} />
                    <label htmlFor="Catch-22">Catch-22</label>
                    <input id="The Kite Runner" type="checkbox" onChange={() => insertValueInBooks("The Kite Runner")} />
                    <label htmlFor="The Kite Runner">The Kite Runner</label>
                    <input id="Catch-22" type="checkbox" onChange={() => insertValueInBooks("Catch-22")} />
                    <label htmlFor="Hamlet">Hamlet</label>
                    <input id="Hamlet" type="checkbox" onChange={() => insertValueInBooks("Hamlet")} />
                    <label htmlFor="SteveJobs">Steve Jobs</label>
                    <input id="SteveJobs" type="checkbox" onChange={() => insertValueInBooks("Steve Jobs")} />
                    <label htmlFor="WingsofFire">Wings of Fire</label>
                    <input id="WingsofFire" type="checkbox" onChange={() => insertValueInBooks("Wings of Fire")} />
                    <input type="submit" />
            </form>
        </>
    )
}