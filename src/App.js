import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Addcolor/>
    </div>
  );
}

export default App;
function Addcolor(){

  const[color,setcolor]=useState("");
  const styles={backgroundColor:color};
  const[colors,setcolors]=useState(["pink","orange","Yellow","Violet"]);
  //Typing triggers OChange event.
  //provies event.target.value(content).
  //invoke the setcolormethod and pass the content ,it will be set the ne wcolor value.
  //React will take care from here.
//here useState can take any data type it want like number,String,Array,Objects etc.

  return(
    <div>
      <input
      style={styles}
      onChange={(event) => setcolor(event.target.value)}
      placeholder="Enter the color"
      />
         {colors.map((clr)=>(<Colorbox color={clr}/>))}
      <button onClick={()=>setcolors([...colors,color])}>Add color</button>
      {colors}
    
        <Colorbox/>

    </div>
  );
}
function Colorbox({color}){
  const styles={
    backgroundColor:color,
    height:"50px",
    width:"200px",
    margin:"10px 0px",

  };
  return(
    <div style={styles} ></div>
  );


}
