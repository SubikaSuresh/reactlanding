import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About'
import Contacts from './pages/Contact'
import Disc from './pages/Disc'
import Navlinks from './components/navlinks/Navlinks'
function App() {
 

  return (
      
     <div className="App" style={{height:"100vh",width:"100vw"}}>
        
         <Navlinks />
        
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contacts" element={<Contacts/>}/>
             <Route path='/disc' element={<Disc/>}/>
         </Routes>
        

</div>
     
    
  )
}

export default App
