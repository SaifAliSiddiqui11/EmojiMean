import React, { useState } from "react";
// let count=1;

const App = () => {
  // const state=useState();
  const [count, setMe] = useState(1);
  const IncNum = () => {
    setMe(count + 1);
  };
  //Use state ek hook hai jo ki values update krne ke kaam me ata hai. isme do types ke return hote hai ek
  //ek value aur dusra ek wo function jo value k modify krne wala hai.
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click</button>
    </>
  );
};
export default App;
