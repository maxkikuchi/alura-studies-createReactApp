import Form from '../Components/Form';
import List from '../Components/List'
//import './style.scss'
import style from './app.module.scss'
import Cronometro from '../Components/Cronometro';
import React from 'react';
import { ITarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefa] = React.useState<ITarefa[] | []>([])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefa}/>
      <List tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
