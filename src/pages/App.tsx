import React from 'react';
import Form from '../Components/Form';
import List from '../Components/List'
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      
      <List />
    </div>
  );
}

function App2() {
  return (
    <div className="AppStyle">
      <Form />
      <List />
    </div>
  );
}

export default App2;
