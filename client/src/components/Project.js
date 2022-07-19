import React, {useState} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Artwork from './pages/Artwork';
import Episodes from './pages/Episodes';
import './Project.css';

function Project() {
    const [currentPage, setCurrentPage] = useState('AboutUs');

    const renderPage = () => {
        if (currentPage === 'AboutUs') {
            return <AboutUs />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Artwork') {
            return <Artwork />;
        }
        if (currentPage === 'Episodes') {
            return <Episodes />;
        }
        }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div id="Project">
          <Header />
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
          <br></br>
          {renderPage()}
          <br></br>
          <Footer />
        </div>
      );
    }   
      
export default Project;