import React from 'react';
import Form from '../Components/Form';
import List from '../Components/List'
//import './style.scss'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      
      <List />
    </div>
  );
}

function App2() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App2;
