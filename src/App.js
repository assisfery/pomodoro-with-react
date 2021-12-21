//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";

function App() {

  var [totalSeconds, setTotalSeconds] = useState(25 * 60);

  var togglePomodoro = () => {

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
          Start
        </button>
      </section>
    </main>
  );

}

export default App;
