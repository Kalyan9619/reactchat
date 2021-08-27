import React from 'react';
import './Header.scss'

const Header = () => {
  
  return (
   
    <div className="header">
      <div className="header-title">
        <div className="header-title__logo">
         
        </div>
        <div className="header-title__heading">
          <p style={{color:'red', fontSize:'150', textAlign:'center'}}>
            Kalyan Somalaraju<br/>
            <span></span>
          </p>
        </div>
      </div>
      <div className="header-tools">
        
      </div>
    </div>
  )
}

export default Header