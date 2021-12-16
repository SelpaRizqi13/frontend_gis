import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import Religi from './view/Religi';
import Unsur from './view/Unsur'
import Data from './view/data_unsur'
import Deskripsi from './view/deskripsi';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" excat element={<Map />} />
          <Route path="/religi" element={<Religi />} />
          <Route path="/unsur/:id" element={<Unsur />} />          
          <Route path="/deskripsi" element={<Deskripsi />}/>
          <Route path="/data" element={<Data />}/>
        </Routes> 
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
