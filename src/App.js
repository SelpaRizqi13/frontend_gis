import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
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
          <Route path="/" element={<Religi />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
