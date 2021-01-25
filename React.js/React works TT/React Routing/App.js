import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import CompA from './CompA';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
<BrowserRouter>
   <CompA/>
</BrowserRouter>
  </div>
  );
}
