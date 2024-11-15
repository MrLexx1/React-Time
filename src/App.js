import "./App.css";
import React, { useState  /* eslint-disable-line */ } from "react";

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <div className="timer">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button className="start" onClick={() => setTimeOn(true)}>
            Start
          </button>
        )}
        {timerOn && (
          <button className="stop" onClick={() => setTimeOn(false)}>
            Stop
          </button>
        )}
        {!timerOn && time !== 0 && (
          <button className="resume" onClick={() => setTimeOn(true)}>
            Resume
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className="reset" onClick={() => setTime(0)}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
