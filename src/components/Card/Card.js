import "./Card.css";

function Card({ name, desc }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default Card;

{
  /* <Card name="" desc="" age="" job="" occupation="" gender=""/> */
}

// props={name,desc,age,job,occupation,gender}

// function Card(props) {
//   return (
//     <div className="card">
//       <h1>{props.name}</h1>
//       <p>{props.desc}</p>
//       <p>{props.rollno}</p>
//     </div>
//   );
// }

// export default Card;

// const myObj = {
//   name: "Avi",
//   age: 21,
//   job: "instructor",
//   phone: "99999",
// };

// const name = myObj.name;
// const age = myObj.age;
// const job = myObj.job;
// const phone = myObj.phone;

// console.log("Name is", name);

// const { name, age, phone, job } = myObj;

// console.log("Name is", name);
// console.log("age is", age);
// console.log("job is", job);
// console.log("phone is", phone);
