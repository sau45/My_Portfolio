import Portfolio from "./component/portfolio/Portfolio"
import {  Routes,Route, BrowserRouter} from 'react-router-dom'
import Navbar from "./component/navbar/Navbar";
import Gallery from "./component/gallery/Gallery";
import { useEffect } from "react";


function App() {
useEffect(()=>{
})
  return (
    <>
    
     <BrowserRouter>
   
       <Navbar/>    
      <Routes>
          <Route path="/" element={<Portfolio/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
  
     </BrowserRouter>
   
    </>
  )
}

export default App