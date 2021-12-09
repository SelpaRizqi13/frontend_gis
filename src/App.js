import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import Religi from './view/Religi';
import Deskripsi from './deskripsi/rel';
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
        <h1>Hello, React Router!</h1>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/unsur/:id" element={<Religi />} />
          <Route path="/deskripsi" element={<Deskripsi />} />
        </Routes> 
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
