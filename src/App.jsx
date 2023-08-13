import Navbar from "./components/Navbar"
import Currency from "./components/Currency"
import Home from "./components/Home"
import Shares from "./components/Shares"
import { BrowserRouter,Route,Routes } from "react-router-dom"


function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route path = "/exchange" element={<Currency/>}/>
          <Route path="/shares" element={<Shares/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App