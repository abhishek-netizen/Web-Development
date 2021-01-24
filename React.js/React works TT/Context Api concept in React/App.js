import React, { createContext } from 'react';
import "./styles.css";
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();


export default function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Mohammed"}>
        <LastName.Provider value={"Mustaq"}>
        <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export { FirstName,LastName};