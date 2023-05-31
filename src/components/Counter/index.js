// export default function Counter() {
//   let count = 0;

import { useState } from "react";

//   function increment() {
//     count = count + 1;
//     document.getElementById("counter-h3").innerText = count;
//   }

//   function decrement() {
//     count = count - 1;
//     document.getElementById("counter-h3").innerText = count;
//   }

//   return (
//     <div>
//       <h3 id="counter-h3">{count}</h3>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

//   state in react -> useState, react hook

export default function Counter() {
  //   const count = 0;

  const [count, setCount] = useState(1);
  //   setCount = setterFnc(param);
  //   const [varName,setVarName] = useState(defaultValue)

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Cannot go above 10");
    }

    // count = newCount
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("Cannot go below 1");
    }
  }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

// useState allows you to create a variable, whenever you update this variable everywhere in the ui (component) it will get updated.
