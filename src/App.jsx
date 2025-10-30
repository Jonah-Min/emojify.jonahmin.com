import { Component } from 'react';
import { Route, Routes } from "react-router";

import Emojify from './containers/Emojify';

import './stylesheets/app.css';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Emojify />} />\
        </Routes>
      </div>
    );
  }
}

export default App;
