import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [timeLeft, setTimeLeft] = useState(new Date());

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(new Date());
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
        {/* React App Hosted Successfully */}
        {timeLeft.toString()}
        </h3>
      </header>
    </div>
  );
}

export default App;
