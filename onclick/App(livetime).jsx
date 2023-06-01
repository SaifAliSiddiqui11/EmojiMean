import React, { useState } from "react";

const App = () => {
  const uptime = new Date().toLocaleTimeString();
  const [ctime, update] = useState(uptime);
  const updateTime = () => {
    const uptime = new Date().toLocaleTimeString();
    update(uptime);
  };
  setInterval(updateTime, 500);
  return (
    <>
      <h2>show time</h2>
      <h1 align="center">{ctime}</h1>
    </>
  );
};

export default App;
