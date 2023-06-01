import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [time, update] = useState(newTime);
  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    update(newTime);
  };
  return (
    <>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </>
  );
};
export default App;
