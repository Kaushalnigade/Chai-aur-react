import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick = { () => setColor("red")}                    //RED
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"red"}}>Red</button>

          <button 
          onClick = { () => setColor("blue")}                   //BLUE
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"Blue"}}>Blue</button>

          <button 
          onClick = { () => setColor("green")}                  //GREEN 
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"Green"}}>Green</button>

          <button 
          onClick = { () => setColor("ORANGE")}                 //ORANGE
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"orange"}}>ORANGE</button>

          <button 
          onClick = { () => setColor("olive")}                   //OLIVE
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"olive"}}>olive</button>

          <button 
          onClick = { () => setColor("Yellow")}                   //YELLOW
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"yellow"}}>Yellow</button>

          <button 
          onClick = { () => setColor("green")}                     //PINK
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"Lawander"}}>lawander</button>

          <button 
          onClick = { () => setColor("pink")}                       //PINK
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"Pink"}}>pink</button>

          <button 
          onClick = { () => setColor("white")}                        //WHITE
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"white"}}>white</button>

          <button 
          onClick = { () => setColor("black")}                       //BLACK 
          className="outline-none px-4 py-1 rounded-full"
          style ={{backgroundColor:"grey"}}>black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
