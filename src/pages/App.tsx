import Form from '../Components/Form';
import List from '../Components/List'
//import './style.scss'
import style from './app.module.scss'
import Cronometro from '../Components/Cronometro';

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
      <Cronometro/>
    </div>
  );
}

export default App2;
