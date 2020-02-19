import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = React.useState(time);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(() => {
    getTime();
  }, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
