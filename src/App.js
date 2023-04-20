import React, { useState, useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Project';
import Footer from './component/Footer';
import { ScaleLoader } from 'react-spinners';


function App() {
  const[loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  },[])
  return (
    < div className = "bg-[#b5ad95] bg-opacity-30" >
      {
        loading ?
        < div className = "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center" >
          <ScaleLoader
          size={100}
          color='#123abc'
          loading={loading}
          />
        </div>

        :
        
        <div>
          <Navbar />
          <Hero/>
          <About/>
          <Project/>
          <Footer/>
        </div>
        
      }


      

    </div>
  );
}

export default App;
