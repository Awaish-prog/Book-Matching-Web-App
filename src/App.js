import BookMatchingInterface from "./Routes/BookMatchingInterface";
import {BrowserRouter} from "react-router-dom"
import NavMenu from "./Components/NavMenu";
import Router from "./Components/Router";

function App() {
  return (
   <>
    <BrowserRouter>
      <NavMenu />
      <Router />
    </BrowserRouter>
   </>
  );
}

export default App;
