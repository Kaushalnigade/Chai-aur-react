// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherUser = "chai aur react "

const reactElement = React.createElement(
  'a',
  
  {
    href: 'https://google.com',
    target: '_blank' 
  },
    // 'click me to visit Google !! '
    <p>click here </p>,
     anotherUser 
);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  reactElement
);
