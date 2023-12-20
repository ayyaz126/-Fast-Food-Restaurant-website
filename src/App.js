import React from 'react';
import Navbar from './component/Navbar'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './component/Footer';
import Home from './component/Home';
import Services from './component/Services';
import Log from './component/Log';




function App() {
  return <div>
         <Router>
      <Navbar/>
      <Routes>
       < Route  path= "/" element={< Home />}/>
       < Route  path= "/serve" element={< Services/>}/>
       < Route  path= "/log" element={< Log/>}/>

      </Routes>
        < Footer />
      </Router>
  </div>
  
}

export default App;
