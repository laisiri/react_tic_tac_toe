//import logo from './logo.svg';
//import './App.css';
import Board from './Board';
import Chart from './Chart';
import { useState } from 'react';

function App() {
  const [won,setWon] = useState(' ');
  let Winer = (win) => {

    setWon(win);

  }
    return (
    <div className="App">
      <Board win={Winer}/>
      <Chart won={won}/>
    </div>
  );
}

export default App;
