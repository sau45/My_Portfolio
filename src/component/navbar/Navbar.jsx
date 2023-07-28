import React, { useState } from 'react'
import {LuMenu} from 'react-icons/lu'
import {RxCross2} from 'react-icons/rx'
import {SlHome} from 'react-icons/sl'
import './style.scss'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [menuShow, setMenuShow]=useState(true);
  const navigate = useNavigate();
  const handleMenu = ()=>{
    setMenuShow(false);
  }
  const handleNavigation =(value)=>{
    navigate(`/${value}`)

  }


  return (
    <>
       <div className="main-navbar">
         {menuShow?<LuMenu className='menu' onClick={handleMenu}/>: <RxCross2 className="menuClose"onClick={()=>setMenuShow(true)}/>} 
         
        <div className={`sub-navbar ${!menuShow? "visible" : "not-visible"}`}>
          <div className="left-nav">
            <ul>
              <li onClick={()=>handleNavigation("")}><SlHome style={{marginRight:"2px"}} />Home</li>
              <li onClick={()=>handleNavigation("gallery")}>Gallery</li>
              
            </ul>

          </div>
          <div className="right-nav">
            <ul>
             
              <a href={"https://github.com/sau45?tab=repositories"} target="_blank" rel="noopener noreferrer"><li>Project</li></a>
              <a href={"https://drive.google.com/file/d/1t2avTHJhwR5pHCv2eLKuwnBeSPISqzwc/view?usp=sharing"} target="_blank"><li>Resume</li></a>
            </ul>

          </div>
        </div>
       </div>
      
   
  </>
  )
}

export default Navbar
