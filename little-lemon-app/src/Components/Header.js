import React from 'react';
import headerImg from '../Assets/headerImg.jpg';
import '../Syles/Header.css';

const Header = () => {
    return (
      <header className='header'>
        <section>
          <div className='head-banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button>Reserve a table</button>
          </div>
          {/* header image */}
          <div className='header-img'>
            <img src={headerImg} alt="" className=''/>
          </div>
        </section>
      </header>
    );
  };
  export default Header;