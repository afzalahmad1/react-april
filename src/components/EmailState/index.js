import { useState } from "react";

function EmailState() {
  const [email, setEmail] = useState("");
  //   const email = "";
  const [pass, setPass] = useState("");
  //   const pass = "";
  const [users, setUsers] = useState([]);
  //   const user = {};

  function createUsers(e) {
    if (email && pass) {
      var myArr = users;
      myArr.push({ email: email, pass: pass });
      setUsers(myArr);
      //   users = newArr
      //   setUsers([...users, { email: email, pass: pass }]);
      setEmail("");
      setPass("");
    } else {
      alert("Please enter all values");
    }
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button onClick={(e) => createUsers(e)}>Click Me</button>

      {users.map((item, i) => {
        return (
          <p>
            {item.email}-{item.pass}
          </p>
        );
      })}
    </div>
  );
}

export default EmailState;

// const arr = ["hi", "hello"];

// arr.forEach((item, i) => console.log("index", i));
