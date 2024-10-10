
import React from 'react'
import Logo from "../Assets/logo.jpg"
import styles from "../styles/Nav.css"
function Nav() {
  return (
    <div className="container">
     <nav>
      <img src={Logo} alt="little-lemon-logo"className="photo-logo" />
      <ul className="menu">
        <li><a href="#">Home page</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
     </nav>
    <hr></hr>
   </div>
  )
}

export default Nav

