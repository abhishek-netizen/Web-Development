import React from "react";
import "./styles.css";
import Heading from './Heading';
import Para from './Para';
import List from './Lists';

export default function App() {
  return (
    <>
      <Heading />
      <Para />
    <ol>
      <List />
    </ol>
    </>
  );
}
