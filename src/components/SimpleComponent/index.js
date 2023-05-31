import React, { Component } from "react";

class SimpleComponent extends Component {
  name = "Avi";

  sayHello() {
    console.log("Hello");
  }

  render() {
    // const { text } = this.props;
    return (
      <div>
        <p>Hello This is Simple Component</p>
        <h1>
          {this.props.text} - {this.name}
        </h1>
        <button onClick={this.sayHello}>Click Me</button>
      </div>
    );
  }
}

export default SimpleComponent;

// const SimpleComponent = ({ text }) => {
//   return (
//     <div>
//       <p>Hello This is Simple Component</p>
//       <h1>{text}</h1>
//     </div>
//   );
// };

// export default SimpleComponent;

// function obj() {
//   return { name: "Avi" };
// }

// class Obj {
//   name = "Avi";
// }

// const obj1 = new Obj();
// const obj2 = obj();

// console.log(obj2);
// console.log(obj1);
