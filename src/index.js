import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// root.render(
//   <div class="myDiv">
//     <h1>HI HELLO</h1>
//     <h1 id="myComponent">This Is My Component</h1>
//     <div>Hello</div>
//   </div>
// );
// JSX

// function MyComponent() {
//   return (
//     <div class="myDiv">
//       <h1>HI HELLO</h1>
//       <h1 id="myComponent">This Is My Component</h1>
//       <div>Hello</div>
//       <MyLittleComponent />
//     </div>
//   );
// }

// function MyLittleComponent() {
//   return (
//     <>
//       <p>Hi, This is the Child Component</p>
//       <p>Hello</p>
//     </>
//   );
// }
