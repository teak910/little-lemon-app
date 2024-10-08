
import React from 'react'
import Logo from "../Assets/img4.jpg"
function Nav() {
  return (
  <>
  <img src={Logo} />
  
  <nav>
    <ul>
      <li><a href="/home">Home page</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
  </>
 
  )
}

export default Nav

