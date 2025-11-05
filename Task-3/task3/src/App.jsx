import React from 'react'
import "./style.css"  // Global Level Css in React js
import ImageContainer from "./components/ImageContainer"
import SectionContainer from "./components/SectionContainer"
import Footer from "./components/Footer"
import SideBox from "./components/SideBox"
import Navbar from "./components/Navbar"
import AnubhabaImg from './assets/Anubhaba.jpg';
const App = () => {
  return (
    <div>
        <Navbar/>
        <div className="maincontainer">
            <div className="left">
                <img src={AnubhabaImg} alt="Anubhaba" className='anubhab' />
            </div>
            <div className="right">
              <div className="sidebox">
                <div class="firststbox"><SideBox/></div>
                <div class="secondbox"><SideBox/></div>
                <div class="thirdbox"><SideBox/></div>                
              </div>
            </div>          
        </div>
        <div className="section">
          <SectionContainer/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
        
    </div>
  )
}

export default App
