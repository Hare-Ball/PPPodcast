import React from 'react';
import './Navbar.css'

// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

// In Navbar, we can assign a style from an object by using curly braces
function Navbar({currentPage, handlePageChange}) {
  return (
    <div class= "container col-9 justify-content-center" id="Navbar">
    <section class="card">
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        href="#about"
        onClick={() => handlePageChange('AboutUs')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={currentPage === 'AboutUs' ? 'nav-link active' : 'nav-link'}
      >
        About Us ❔
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#artwork"
        onClick={() => handlePageChange('Artwork')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Artwork' ? 'nav-link active' : 'nav-link'}
      >
        Artwork 🎨
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#episodes"
        onClick={() => handlePageChange('Episodes')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Episodes' ? 'nav-link active' : 'nav-link'}
      >
        Episodes 💻
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact Us 📭
      </a>
    </li>
  </ul>
  </section>
  </div>
  );
}

export default Navbar;

