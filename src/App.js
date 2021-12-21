//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";

function App() {

  var [totalSeconds, setTotalSeconds] = useState(25 * 60);
  var [started, setStarted] = useState(false);
  var [timer, setTimer] = useState(null);

  var togglePomodoro = () => {
    setStarted(started = !started);

    if(started)
    {
      setTimer(setInterval(() => {

          setTotalSeconds((totalSeconds) => totalSeconds > 0 ? totalSeconds - 1 : 0);

      }, 1000));
    }
    else
    {
      clearInterval(timer);
    }
  }

  var resetCount = () => {
    setTotalSeconds(25 * 60);
  }

  return (
    <main className="bg-red-400 h-screen">
      <header className="w-4/5 mx-auto py-3">
        <h1 className='text-white font-mono text-2xl'>React Pomodoro</h1>
      </header>
      <section className="w-4/5 mx-auto bg-red-300 rounded p-5 text-center">
        <h3 className='text-white text-8xl font-bold'>
        { (Math.floor(totalSeconds / 60)).toString().padStart(2,'0') }:{ (totalSeconds % 60).toString().padStart(2,'0') }
        </h3>
        <button
          onClick={ togglePomodoro }
          className='mt-5 text-red-300 bg-white text-xl rounded py-2 w-48 border-2 border-white hover:bg-red-300 hover:text-white'>
          { !started ? "Start" : "Pause" }
        </button>
        <br/>
        <a href="#" className="text-white mt-3 inline-block" onClick={ resetCount }>Reset Counter</a>
      </section>
    </main>
  );

}

export default App;
