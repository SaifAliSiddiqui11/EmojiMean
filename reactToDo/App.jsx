import React, { useState } from "react";
import "./style.css";
import DeleteIcon from '@mui/icons-material/Delete';

const App=()=>{

const [data,modify]=useState(0);


const incri=()=>{
modify(data+1);
};
const decri=()=>{
  if(data>0){
    modify(data-1);
  }
  else{
    alert("not permissible");
  }
};

return (
  <>
  <div className="mainDiv">
<div class="miniDiv">
<h1>{data}</h1>
<button onClick={incri}>< DeleteIcon /></button>
<button onClick={decri}>decre</button>
</div>
  </div>
  </>
);
};
export default App;
