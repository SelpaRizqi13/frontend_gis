import React from 'react';
import Map from './Map';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Routes , Route
} from "react-router-dom";
import Unsur from './components/pages/Unsur';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Map />} />
          <Route path='/unsur/:id' element={<Unsur />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
    );
}

export default App;
