import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Home} from "./pages/Home";
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import Destinations from './pages/Destinations';
import Thingstodo from './pages/Thingstodo';
import Foodanddine from './pages/Foodanddine';
import Account from './pages/Account';
import './App.css'
import Stay from './pages/Stay';
import Andheri from './pages/Andheri';
import Bandra from './pages/Bandra';
import Csmt from './pages/Csmt';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [user_name, setUser_name] = useState('')

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 160) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to the top of the page when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleDataFromChild = (data) => {
      console.log(data ,'from appjs')
      setUser_name(data)
    };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login onData={handleDataFromChild} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/destinations' element={ <Destinations/> } />
          <Route path='/thingstodo' element={ <Thingstodo/> } />
          <Route path='/foodanddining' element={ <Foodanddine user_name = {user_name} /> } />
          <Route path='/account' element = { <Account/> } />  
          <Route path='/stay' element = { <Stay/> } />
          <Route path='/andheri' element = { <Andheri/> } />
          <Route path='/bandra' element = { <Bandra/> } />
          <Route path='/csmt' element = { <Csmt/> } />
        </Routes>
      </Router>

      <div className="back-to-top-container">
            {isVisible && (
                <button className="back-to-top-button" onClick={scrollToTop}>
                    <span class="material-symbols-outlined">
arrow_upward
</span>
                </button>
            )}
        </div>
    </>
  );
}

export default App;
