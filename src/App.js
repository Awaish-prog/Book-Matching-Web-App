import React, { useState } from "react";
import {BrowserRouter} from "react-router-dom"
import Router from "./Components/Router";

export const CurrentUserContext = React.createContext()

function App() {

  const [currentUser, setCurrentUser] = useState("")

  return (
   <>
   <CurrentUserContext.Provider value={[currentUser, setCurrentUser]} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CurrentUserContext.Provider>
   </>
  );
}

export default App;
